import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';


// 控制器
@Controller()
@ApiTags('默认')

export class AppController {
  constructor(private readonly appService: AppService) { }
  // 装饰器 get请求
  @Get()
  @ApiOperation({ summary: '入口接口' })
  getHello(): string {
    return this.appService.getHello();
  }
}
