import { Injectable } from '@nestjs/common';
import { UserEntity } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, getRepository, DeleteResult } from 'typeorm';
import { MsgService } from '../msg/msg.service'
import { userLoginDto } from '../class/class'
import * as argon2 from 'argon2';
import { HttpException } from '@nestjs/common/exceptions/http.exception';
const jwt = require('jsonwebtoken');

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserEntity)
        private readonly user: Repository<UserEntity>,
        private readonly MSG: MsgService
    ) { }
    async login({ username, password }: userLoginDto): Promise<UserEntity> {
        console.log('this.user', this.user);
        // 通过SQL语句查询username
        const user = await this.user.findOne({ username });
        // console.log('user', user);
        if (!user) {
            return null
        }
        if (await argon2.verify(user.password, password)) {
            return user
        }
        return null
    }
    async findOne({ username, password }: userLoginDto): Promise<UserEntity> {
        console.log('username', username);
        const user = await this.user.findOne({ username });
        console.log('user.password', user.password);
        console.log('password', password);
        if (!user) {
            return null;
        }
        if (password === user.password) {
            return user
        }

        // if (await argon2.verify(user.password, password)) {
        //     return user;
        // }

        return null;
    }
    async getUserInfo(username: string) {
        console.log('username',username);
        // 通过SQL语句查询username
        const userInfo = await this.user.findOne({username})
        console.log('userInfo',userInfo);




        return {
            success: true,
            data: {
                id: 1,
                username: 'orange',
                age: 25,
                role: '管理员'
            }
        }
    }
    async findById(id: number) {
        const user = await this.user.findOne(id);

        if (!user) {
            const errors = { User: ' not found' };
            throw new HttpException({ errors }, 401);
        }

        return this.buildUserRO(user);
    }
    public generateJWT(user) {
        let today = new Date();
        let exp = new Date(today);
        exp.setDate(today.getDate() + 60);

        return jwt.sign({
            // id: user.id,
            username: user.username,
            exp: exp.getTime() / 1000,
        }, 'orange');
    };
    private buildUserRO(user: UserEntity) {
        const userRO = {
            // id: user.id,
            // username: user.username,
            token: this.generateJWT(user)
        };

        return userRO;
    }
}
