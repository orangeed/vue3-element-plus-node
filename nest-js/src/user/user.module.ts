import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UserEntity } from './user.entity'
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])], // 引用数据库实例,通过@InjectRepository装饰器将其注入到service中
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService]
})
// 
// export class UserModule implements NestModule {
//   public configure(consumer: MiddlewareConsumer) {
//     consumer
//       .apply(AuthMiddleware)
//       .forRoutes(
//         // { path: 'user/login', method: RequestMethod.POST },
//         { path: 'user/userInfo', method: RequestMethod.GET }
//       );
//   }
// }

export class UserModule {}
