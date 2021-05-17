import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { PersonModule } from './person/person.module';
import { MsgModule } from './msg/msg.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      // password: 'jixin', //公司电脑数据库密码
      password: '123456', //自己电脑数据库密码 
      database: 'addressbook',
      synchronize: true,
      entities: [__dirname + '/**/*.entity.{js,ts}']
    }),
    UserModule,
    PersonModule,
    MsgModule,

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
