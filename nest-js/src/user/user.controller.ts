import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { userLoginDto } from 'src/class/class';
import { UserService } from './user.service';
import { MsgService } from '../msg/msg.service'
import { success, loginErr } from '../utils/state'

@Controller('user')
@ApiTags('用户登录')
export class UserController {
    private loginUserName: string
    constructor(private readonly userService: UserService, private readonly MSG: MsgService) { }
    @Post('/login')
    @ApiOperation({ summary: '检测用户登录帐号密码是否正确，并返回token' })
    async login(@Body() loginUser: userLoginDto) {
        console.log('loginUser', loginUser);
        this.loginUserName = loginUser.username
        const _user = await this.userService.findOne(loginUser)
        console.log('_user', _user);

        if (!_user) return this.MSG.fail(loginErr)
        const token = await this.userService.generateJWT(_user);
        const user = { token };
        // console.log('result', user);
        // return { user }
        return this.MSG.pass(success, user)

        // return this.userService.login()
    }

    @Get('/userInfo')
    @ApiOperation({ summary: '获取用户登录信息' })
    getUserInfo() {
        const loginUserName = this.loginUserName
        return this.userService.getUserInfo(loginUserName)
    }
}
