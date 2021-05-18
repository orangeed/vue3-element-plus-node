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
        if (!dat) dat = {};
        console.log(dat);
        return { data: dat, message: msg.message, errorCode: msg.errorCode };
    }
}