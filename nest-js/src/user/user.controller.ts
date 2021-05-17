import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { userLoginDto } from 'src/class/class';
import { UserService } from './user.service';
import { MsgService } from '../msg/msg.service'


@Controller('user')
@ApiTags('用户登录')
export class UserController {
    constructor(private readonly userService: UserService, private readonly MSG: MsgService) { }
    @Post('/login')
    @ApiOperation({ summary: '检测用户登录帐号密码是否正确，并返回token' })
    async login(@Body() loginUser: userLoginDto) {
        console.log('loginUser', loginUser);
        const _user = await this.userService.findOne(loginUser)
        console.log('_user',_user);
        
        if (_user) this.MSG.fail('no user')
        const token = await this.userService.generateJWT(_user);
        const { username } = _user;
        const user = { token, username };
        console.log('result',user);
        return { user }

        // return this.userService.login()
    }

    @Get(':id')
    @ApiOperation({ summary: '获取用户登录信息' })
    getUserInfo() {
        return this.userService.getUserInfo()
    }
}
