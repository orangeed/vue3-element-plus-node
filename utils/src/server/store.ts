import request from './request.ts'

// Returns pet inventories by status
export const  inventory = (params):Promise<any> =>{
  return request({
    url:'/store/inventory',
    method: 'get',
    params,
  })
}

// Place an order for a pet
export const  order = (data):Promise<any> =>{
  return request({
    url:'/store/order',
    method: 'post',
    data,
  })
}

// Find purchase order by ID
export const  {orderId} = (params):Promise<any> =>{
  return request({
    url:'/store/order/{orderId}',
    method: 'get',
    params,
  })
}
