// user数据库实体
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BeforeInsert,
  // JoinTable,
  // ManyToMany,
  // OneToMany,
  // BeforeUpdate
} from 'typeorm';
// import { IsEmail } from 'class-validator';
import * as argon2 from 'argon2';

@Entity('user')
export class UserEntity {
  // 创建自动生成的id列
  @PrimaryGeneratedColumn()
  id: number;

  // 用户名
  @Column()
  username: string;

  // 密码
  @Column()
  password: string;

  // 姓名
  @Column()
  name: string

  // 性别
  @Column({ nullable: true })
  sex: string

  // 生日
  @Column({ nullable: true })
  birthday: string

  // 联系方式
  @Column({ nullable: true })
  phone: string

  // 身份证号码
  @Column({ nullable: true })
  cardID: string

  @BeforeInsert()
  async hashPassword() {
    this.password = await argon2.hash(this.password);
  }
}
