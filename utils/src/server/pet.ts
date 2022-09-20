import request from './request.ts'

// Add a new pet to the store
export const  pet = (data):Promise<any> =>{
  return request({
    url:'/pet',
    method: 'post',
    data,
  })
}

// Finds Pets by status
export const  findByStatus = (params):Promise<any> =>{
  return request({
    url:'/pet/findByStatus',
    method: 'get',
    params,
  })
}

// Finds Pets by tags
export const  findByTags = (params):Promise<any> =>{
  return request({
    url:'/pet/findByTags',
    method: 'get',
    params,
  })
}

// Updates a pet in the store with form data
export const  {petId} = (data):Promise<any> =>{
  return request({
    url:'/pet/{petId}',
    method: 'post',
    data,
  })
}

// uploads an image
export const  uploadImage = (data):Promise<any> =>{
  return request({
    url:'/pet/{petId}/uploadImage',
    method: 'post',
    data,
  })
}
