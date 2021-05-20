// token验证的中间件
import { HttpException } from '@nestjs/common/exceptions/http.exception';
import { NestMiddleware, HttpStatus, Injectable } from '@nestjs/common';
// import { ExtractJwt, Strategy } from 'passport-jwt'
import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken'
// import { SECRET } from '../config';
import { UserService } from '../user/user.service';
import { MsgService } from "../msg/msg.service";
import { tokenErr } from './state'

@Injectable()
export class AuthMiddleware implements NestMiddleware {
    constructor(private readonly userService: UserService,
        private readonly MSG: MsgService) { }

    async use(req: Request, res: Response, next: NextFunction) {
        const Access_Token = req.headers.access_token;
        // console.log('req', req.headers);
        if (Access_Token) {
            const token = Access_Token.toString();

            const decoded: any = this.verify(token);
            const user = await this.userService.findById(decoded.id);

            if (!user) {
                throw new HttpException('User not found.', HttpStatus.UNAUTHORIZED);
            }

            // req.user = user;
            next();

        } else {
            throw new HttpException('没有token', HttpStatus.UNAUTHORIZED);
        }
    }
    private verify(token: string) {
        let decoded: any
        try {
            // decoded = jwt.verify(token, SECRET);
            decoded = jwt.verify(token, 'orange');
        } catch (e) {
            this.MSG.fail(tokenErr)
        }
        return decoded
    }
}