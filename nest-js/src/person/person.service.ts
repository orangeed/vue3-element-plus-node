import { Injectable } from '@nestjs/common';

@Injectable()
export class PersonService {

    getPerson() {
        return {
            id: 1,
            name: 'He',
            age: 23
        }
    }
    getPersonDetail() {
        return {
            id: 2,
            name: 'CHEN',
            age: 25
        }
    }
    postPerson() {
        return {
            success: true,
            errorCode: 0,
            message: '添加成功！'
        }
    }
    updatePersonInfo() {
        return {
            success: true,
            errorCode: 0,
            message: '修改成功！'
        }
    }
    deleteUserInfo() {
        return {
            success: true,
            errorCode: 0,
            message: '删除成功！'
        }
    }
}
