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
    @Column({ nullable: true })
    title: string

    // 文章作者
    @Column({ nullable: true })
    author: string

    // 文章简介
    @Column({ nullable: true })
    description: string

    // markdown 文章内容
    @Column('mediumtext')
    content: string

    // 发布时间
    @Column({ nullable: true })
    createTime: string

    // 修改时间
    @Column({ nullable: true })
    changeTime: string

    // 文章状态
    @Column({ nullable: true })
    state: number
}