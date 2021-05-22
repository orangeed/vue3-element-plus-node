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
