import { HttpException, HttpStatus, Injectable } from '@nestjs/common';



@Injectable()
export class MsgService {
    public fail(msg: any) {
        console.log('msg', msg);
        if (msg.errorCode) {
            return { ...msg }
        }
        // else {
        //     throw new HttpException({ message: msg.message }, HttpStatus.BAD_REQUEST);
        // }
    }
    public pass(msg: any, dat: any) {
        console.log(dat);
        return { result: dat, message: msg.message, code: msg.code };
    }
}