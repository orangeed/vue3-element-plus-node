import { http } from "../utils/http"

// 新增文章
export const createArticle = (data: object): any => {
    return http.request("post", "/article", data)
}

// 获取文章列表
export const getArticleList = (data: object): any => {
    return http.request("get", "/article", data)
}