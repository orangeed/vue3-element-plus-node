import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
    login() {
        return {
            success: true,
            token: 'asdasd'
        }
    }
    getUserInfo() {
        return {
            success: true,
            data: {
                id: 1,
                name: 'orange',
                age: 25,
                role: '管理员'
            }
        }
    }
}
