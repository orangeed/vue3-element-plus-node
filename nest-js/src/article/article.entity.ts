// 文章数据库实体
import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    BeforeInsert,
    JoinTable,
    ManyToMany,
    OneToMany,
    BeforeUpdate
} from 'typeorm';

@Entity('article')
export class ArticleEntity {
    //  创建自动生成的id列
    @PrimaryGeneratedColumn()
    id: number

    // 文章title
    @Column()
    title: string

    // 文章简介
    @Column()
    description: string

    // markdown 文章内容
    @Column()
    content: string

    // 发布时间
    @Column()
    createTime: string

    // 修改时间
    @Column({ nullable: true })
    changeTime: string

    // 文章状态
    @Column()
    state: number
}