// export class State {
//     // success消息
//     public readonly success = {
//         errorCode: 0,
//         message: '成功'
//     }
//     // error消息
//     public readonly login = {
//         errorCode: 100,
//         message: '用户名错误或者密码不正确'
//     }
// }

export const success = {
    errorCode: 0,
    message: '成功'
}

export const tokenErr = {
    errorCode: 99,
    message: 'toekn不正确'
}

export const loginErr = {
    errorCode: 100,
    message: '用户名错误或者密码不正确'
}

export const userInfoErr = {
    errorCode: 101,
    message: '获取登录用户信息失败'
}

export const articleCreateErr = {
    errorCode: 102,
    message: '新增文章失败'
}

export const getArticleListErr = {
    errorCode: 103,
    message: '获取文章列表失败'
}
