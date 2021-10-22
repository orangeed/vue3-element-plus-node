import { RequestMethod } from '@nestjs/common'


export const route: any = [
    { path: 'user/userInfo', method: RequestMethod.GET },
    { path: 'user/logout', method: RequestMethod.DELETE },
    { path: 'user/logout', method: RequestMethod.DELETE },
    { path: 'article', method: RequestMethod.POST },
    { path: 'article', method: RequestMethod.GET },
    { path: 'article/detail', method: RequestMethod.GET },
]