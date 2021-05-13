import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { UserService } from './user.service';


@Controller('user')
@ApiTags('用户登录')
export class UserController {
    constructor(private readonly userService: UserService) { }
    @Get('/')
    @ApiOperation({ summary: '检测用户登录帐号密码是否正确，并返回token' })
    login() {
        return this.userService.login()
    }

    @Get(':id')
    @ApiOperation({ summary: '获取用户登录信息' })
    getUserInfo() {
        return this.userService.getUserInfo()
    }
}
