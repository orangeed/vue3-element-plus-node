import { http } from "../utils/http"

// 获取文章列表
export const getArticleList = (data: object): any => {
    return http.request("get", "/article", data)
}

// 获取某一个文章详情
export const getArticleDetail = (data: object): any => {
    return http.request('get', '/article/detail', data)
}

// 文章或者作者的模糊查询
export const getSearch = (data: object): any => {
    return http.request('get', '/article/search', data)
}