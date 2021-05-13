import { Injectable } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';

// 依赖注入
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!My name is orange.';
  }
}
