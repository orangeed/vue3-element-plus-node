import { Module, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppService } from './app.service';
import { route } from './router/index'
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
      password: 'cj123456', //公司电脑数据库密码
      // password: 'orange123456.', //自己电脑数据库密码 
      // database: 'blog',//自己电脑数据库
      database: 'blog',//公司电脑数据库
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
        route
      );
  }
}
