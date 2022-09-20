const fs = require('fs')
const path = require('path')
const http = require('http')

function mkdirsSync(dirname) {
    if (fs.existsSync(dirname)) {
        return true
    } else {
        if (mkdirsSync(path.dirname(dirname))) {
            fs.mkdirSync(dirname)
            return true
        }
    }
}
function getPath(pathUrl) {
    return path.resolve(__dirname, pathUrl)
}
function generateTemplate() {
    return `import request from './request.ts'
`
}
function generateFunc(url, summary, type = 'post') {
    const arr = url.slice(1).split('/')
    const fun = arr[arr.length - 1]
    return `
// ${summary || ''}
export const  ${fun} = (${type === 'get' ? 'params' : 'data'}):Promise<any> =>{
  return request({
    url:'${url}',
    method: '${type}',
    ${type === 'get' ? 'params' : 'data'},
  })
}
`
}

function httpgetJson(url) {
    return new Promise((resolve, reject) => {
        http.get(url, (res) => {
            const { statusCode } = res
            const contentType = res.headers['content-type']
            let error
            if (statusCode !== 200) {
                error = new Error('请求失败。' + `状态码: ${statusCode}`)
            } else if (!contentType.includes('application/json')) {
                error = new Error('无效的 content-type.' +
                    `期望 application/json 但获取的是 ${contentType}`)
            }
            if (error) {
                console.error(error.message)
                // 消耗响应数据以释放内存
                res.resume()
                return
            }

            res.setEncoding('utf8')
            let rawData = ''
            res.on('data', (chunk) => {
                rawData += chunk
            })
            res.on('end', () => {
                try {
                    const parsedData = JSON.parse(rawData)
                    resolve(parsedData)
                } catch (e) {
                    reject(`错误: ${e.message}`)
                }
            })
        }).on('error', (e) => {
            reject(`错误: ${e.message}`)
        })
    })
}

const srcFolder = '/src'
const url = 'http://127.0.0.1:5500/utils/swagger.json'
// const argv = process.argv
// console.log(argv)

async function main() {
    console.log('获取远程json文件中...')
    const { paths } = await httpgetJson(url)
    console.log('获取成功正在生成api文件')
    const obj = {}
    for (const name in paths) {
        const path = paths[name]

        let folder = ''
        if (path.post) {
            const tag = path.post.tags[0]
            if (!tag) continue
            const urlArray = name.slice(1).split('/')
            if (name.slice(1).split('/').length === 4) {
                folder = urlArray[1]
            } else {
                if (name.slice(1).split('/')[0] !== tag) continue
            }
            if (obj[path.post.tags[0]]) {
                obj[path.post.tags[0]].push({ summary: path.post.summary, tag, name, type: 'post', folder })
            } else {
                obj[path.post.tags[0]] = [{ summary: path.post.summary, tag, name, type: 'post', folder }]
            }
        } else if (path.get) {
            const tag = path.get.tags[0]
            if (!tag) continue
            const urlArray = name.slice(1).split('/')
            if (name.slice(1).split('/').length === 4) {
                folder = urlArray[1]
            } else {
                if (name.slice(1).split('/')[0] !== tag) continue
            }
            if (obj[path.get.tags[0]]) {
                obj[path.get.tags[0]].push({ summary: path.get.summary, tag, name, type: 'get', folder })
            } else {
                obj[path.get.tags[0]] = [{ summary: path.get.summary, tag, name, type: 'get', folder }]
            }
        }
    }
    for (const tagName in obj) {
        let jsString = ''
        const requestTypes = []
        let folder = ''
        for (const item of obj[tagName]) {
            const requestType = requestTypes.filter(o => o === item.type)
            if (requestType.length === 0) requestTypes.push(item.type)
            jsString += generateFunc(item.name, item.summary, item.type)
            folder = item.folder
        }
        jsString = generateTemplate(requestTypes) + jsString
        mkdirsSync(getPath(`./${srcFolder}/server/${folder}`))
        fs.writeFileSync(getPath(`./${srcFolder}/server/${folder}/${tagName}.ts`), jsString)
    }
    console.log('生成完毕')
}

main()