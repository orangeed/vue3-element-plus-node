import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty } from "class-validator"

export class CreatepersonDto {
    @ApiProperty({ description: '用户名称', example: "orange" })
    @IsNotEmpty({ message: '用户名称不能为空' })
    name: string
    @IsNotEmpty({ message: '用户年龄不能为空' })
    @ApiProperty({ description: '用户年龄', example: 23 })
    age: number
}

export class DeletePrsonDto {
    @ApiProperty({ description: '删除的id', example: 1 })
    @IsNotEmpty({ message: '编号id不能为空' })
    id: number
}
export class UpdatePersonDto {
    @ApiProperty({ description: "修改的id", example: 1 })
    @IsNotEmpty({ message: '编号id不能为空' })
    id: number
    @ApiProperty({ description: '修改后的用户名称', example: 'orange' })
    @IsNotEmpty({ message: '用户名称不能为空' })
    name: string
    @ApiProperty({ description: "修改后的用户年龄", example: 25 })
    @ApiProperty({ description: '用户年龄', example: 23 })
    age: number
}

// 登陆
export class userLoginDto {
    @IsNotEmpty()
    readonly username: string
    @IsNotEmpty()
    readonly password: string
}

// 文章信息
export class articleInfoDto {
    @ApiProperty({ description: '文章标题', example: '这个是第一篇文章' })
    @IsNotEmpty({ message: '文章标题不能为空' })
    readonly title: string

    @ApiProperty({ description: '文章作者', example: 'orange' })
    @IsNotEmpty({ message: '文章作者不能为空' })
    readonly author: string

    @ApiProperty({ description: '文章简介', example: '这个是文章简介' })
    @IsNotEmpty({ message: '文章简介不能为空' })
    readonly description: string

    @ApiProperty({ description: '文章内容', example: '这个是文章内容' })
    @IsNotEmpty({ message: '文章内容不能为空' })
    readonly content: string

    @ApiProperty({ description: '文章的创建时间', example: '2021-05-24' })
    @IsNotEmpty({ message: '文章创建时间不能为空' })
    readonly createTime: string

    @ApiProperty({ description: '文章的修改时间', example: '2021-05-24' })
    readonly changeTime: string

    @ApiProperty({ description: '文章的状态', example: '1显示，2不显示' })
    @IsNotEmpty({ message: '文章状态不能为空' })
    readonly state: number
}

// 文章列表
export class articleListDto {
    @ApiProperty({ description: '分页数量，每页显示多少条数据' })
    @IsNotEmpty({ message: '分页数量不能为空' })
    readonly pageSize: number

    @ApiProperty({ description: '当前所处第几页' })
    @IsNotEmpty({ message: '当前页数不能为空' })
    readonly currentPage: number
}
