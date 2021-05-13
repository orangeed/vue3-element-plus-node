import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { PersonService } from './person.service'
import { CreatepersonDto, DeletePrsonDto, UpdatePersonDto } from '../class/class'

@Controller('person')
@ApiTags('用户信息')
export class PersonController {
    constructor(private readonly personService: PersonService) { }
    // 获取全部的用户信息
    @Get('/')
    @ApiOperation({ summary: '获取用户信息' })
    getPerson() {
        return this.personService.getPerson()
    }
    // 通过id查询用户信息
    @Get('/')
    @ApiOperation({ summary: '获取指定的某一个用户信息' })
    getPersonDetail(@Param('id') id: number) {
        console.log(id);
        return this.personService.getPersonDetail()
    }
    // 添加用户信息
    @Post('/')
    @ApiOperation({ summary: '添加用户信息' })
    // 通过@Body()装饰器取body的数据
    postPerson(@Body() body: CreatepersonDto) {
        console.log(body);
        return this.personService.postPerson()
    }
    // 编辑用户信息
    @Put('/')
    @ApiOperation({ summary: '编辑修改用户信息' })
    updatePersonInfo(@Body() Body: UpdatePersonDto) {
        return this.personService.updatePersonInfo()
    }
    // 删除用户信息
    @Delete('/')
    @ApiOperation({ summary: "删除用户信息" })
    deleteUserInfo(@Body() body: DeletePrsonDto) {
        return this.personService.deleteUserInfo()
    }
}
