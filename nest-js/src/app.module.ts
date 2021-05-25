import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { PersonModule } from './person/person.module';
import { MsgModule } from './msg/msg.module';
import { AuthMiddleware } from './utils/auth.generateJWT';
import { ArticleModule } from './article/article.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'jixin', //公司电脑数据库密码
      // password: '123456', //自己电脑数据库密码 
      database: 'addressbook',
      synchronize: true,
      entities: [__dirname + '/**/*.entity.{js,ts}']
    }),
    UserModule,
    PersonModule,
    MsgModule,
    ArticleModule,

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  public configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .forRoutes(
        // { path: 'user/login', method: RequestMethod.POST },
        { path: 'user/userInfo', method: RequestMethod.GET }
      );
  }
}
