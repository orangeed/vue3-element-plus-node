import { HttpException } from '@nestjs/common/exceptions/http.exception';
import { NestMiddleware, HttpStatus, Injectable } from '@nestjs/common';
import { ExtractJwt, Strategy } from 'passport-jwt'
import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken'
// import { SECRET } from '../config';
import { UserService } from './user.service';
import { MsgService } from "../msg/msg.service";

@Injectable()
export class AuthMiddleware implements NestMiddleware {
    constructor(private readonly userService: UserService,
        private readonly MSG: MsgService) { }

    async use(req: Request, res: Response, next: NextFunction) {
        const authHeaders = req.headers.authorization;
        if (authHeaders) {
            const token = authHeaders;

            const decoded: any = this.verify(token);
            const user = await this.userService.findById(decoded.id);

            if (!user) {
                throw new HttpException('User not found.', HttpStatus.UNAUTHORIZED);
            }

            // req.user = user;
            next();

        } else {
            throw new HttpException('Not authorized.', HttpStatus.UNAUTHORIZED);
        }
    }
    private verify(token: string) {
        let decoded: any
        try {
            // decoded = jwt.verify(token, SECRET);
            decoded = jwt.verify(token, 'orange');
        } catch (e) {
            this.MSG.fail('token error')
        }
        return decoded
    }
}