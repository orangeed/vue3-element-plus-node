import request from './request.ts'

// 创建一个用户
export const  user = (data):Promise<any> =>{
  return request({
    url:'/user',
    method: 'post',
    data,
  })
}

// Creates list of users with given input array
export const  createWithArray = (data):Promise<any> =>{
  return request({
    url:'/user/createWithArray',
    method: 'post',
    data,
  })
}

// Creates list of users with given input array
export const  createWithList = (data):Promise<any> =>{
  return request({
    url:'/user/createWithList',
    method: 'post',
    data,
  })
}

// Logs user into the system
export const  login = (params):Promise<any> =>{
  return request({
    url:'/user/login',
    method: 'get',
    params,
  })
}

// Logs out current logged in user session
export const  logout = (params):Promise<any> =>{
  return request({
    url:'/user/logout',
    method: 'get',
    params,
  })
}

// Get user by user name
export const  {username} = (params):Promise<any> =>{
  return request({
    url:'/user/{username}',
    method: 'get',
    params,
  })
}
