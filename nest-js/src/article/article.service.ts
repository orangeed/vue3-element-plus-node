import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { articleInfoDto, articleListDto } from 'src/class/class';
import { MsgService } from 'src/msg/msg.service';
import { Repository } from 'typeorm';
import { ArticleEntity } from './article.entity';


@Injectable()
export class ArticleService {
    constructor(@InjectRepository(ArticleEntity)
    private readonly article: Repository<ArticleEntity>,
        private readonly MSG: MsgService) { }
    // 新建文章
    async createArticle(articleInfo: articleInfoDto): Promise<ArticleEntity> {
        console.log('articleInfo', articleInfo);
        return await this.article.save(articleInfo)
    }
    // 分页查询
    async getArticleList(articleListQuery: articleListDto) {
        let db = this.article.createQueryBuilder('article')
        db = db.skip(articleListQuery.pageSize * (articleListQuery.currentPage - 1)).take(articleListQuery.pageSize)
        return await db.getManyAndCount()
    }
    // 获取某一条信息
    async getArticleDetail(articleDetail) {
        console.log('articleDetail', articleDetail);
        const { id } = articleDetail
        return await this.article.findOne({ id })
    }
}
