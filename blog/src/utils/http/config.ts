import { AxiosRequestConfig } from "axios"
import { excludeProps } from "./utils"
/**
 * 默认配置
 */
export const defaultConfig: AxiosRequestConfig = {
  // baseURL: '/api',
  baseURL: 'http://127.0.0.1:5000/',
  timeout: 10000, //10秒超时
  headers: {
    Accept: "application/json, text/plain, */*",
    "Content-Type": "application/json",
    "X-Requested-With": "XMLHttpRequest",
    "isWeb": 'true'
  },
}

export function genConfig(config?: AxiosRequestConfig): AxiosRequestConfig {
  if (!config) {
    return defaultConfig
  }

  const { headers } = config
  if (headers && typeof headers === "object") {
    defaultConfig.headers = {
      ...defaultConfig.headers,
      ...headers
    }
  }
  return { ...excludeProps(config!, "headers"), ...defaultConfig }
}

export const METHODS = ["post", "get", "put", "delete", "option", "patch"]
