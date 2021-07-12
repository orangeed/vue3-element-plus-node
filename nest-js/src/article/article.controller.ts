import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { articleInfoDto, articleListDto, searchInfoDto } from 'src/class/class';
import { MsgService } from 'src/msg/msg.service';
import { articleCreateErr, getArticleListErr, getArticleDetailErr, success, getSearchErr } from 'src/utils/state';
import { ArticleService } from './article.service';

@Controller('article')
@ApiTags('文章接口')
export class ArticleController {
    constructor(private readonly articleService: ArticleService, private readonly MSG: MsgService) { }
    @Post('/')
    @ApiOperation({ summary: '新增文章' })
    async createArticle(@Body() articleInfo: articleInfoDto) {
        console.log('这是新增文章的接口', articleInfo);
        const _state = await this.articleService.createArticle(articleInfo)
        console.log('_state', _state);
        if (!_state) return this.MSG.fail(articleCreateErr)
        const interfaceInfo = '这个是新增文章的接口'
        return this.MSG.pass(success, interfaceInfo)
    }
    @Get('/')
    @ApiOperation({ summary: "获取文章列表" })
    async getArticleList(@Query() articleListQuery: articleListDto) {
        const _articleList = await this.articleService.getArticleList(articleListQuery)
        if (!_articleList) return this.MSG.fail(getArticleListErr)
        console.log('_articleList', _articleList[0]);
        _articleList[0].forEach(v => {
            console.log(v);
            delete v.content
        })
        const returnData = {
            total: _articleList[1],
            data: _articleList[0]
        }
        return this.MSG.pass(success, returnData)
    }
    @Get('/detail')
    @ApiOperation({ summary: '获取文章详情' })
    async getArticleDetail(@Query() articleDetail) {
        const _articleDetail = await this.articleService.getArticleDetail(articleDetail.articleID)
        if (!_articleDetail) return this.MSG.fail(getArticleDetailErr)
        return this.MSG.pass(success, _articleDetail)
    }
    @Get('/search')
    @ApiOperation({ summary: '模糊搜索' })
    async getSearch(@Query() searchInfo: searchInfoDto) {
        const { title, author } = searchInfo
        let _searchActicle
        if (title) {
            _searchActicle = await this.articleService.getSearch(title)
        }
        if (author) {
            _searchActicle = await this.articleService.getSearch(author)
        }
        if (!_searchActicle) return this.MSG.fail(getSearchErr)
        return this.MSG.pass(success, _searchActicle)
    }

}
