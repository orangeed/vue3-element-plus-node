import { http } from "../utils/http"

// 登录
export const login = (data: object): any => {
    return http.request("post", "/user/login", data)
}

// 获取登录人员信息
export const getUserInfo = (): any => {
    return http.request("get", '/user/userInfo')
}

// 退出登录
export const logoutInfo = (data: object): any => {
    return http.request('delete', '/user/logout', data)
}