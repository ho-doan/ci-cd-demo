import { ApiProperty } from "@nestjs/swagger";

//khóa học
export class CreateCourseDto {
    @ApiProperty({
        description: 'name',
        type: 'string'
    })
    name: string
    @ApiProperty({
        description: 'content',
        type: 'string',
    })
    content: string
    @ApiProperty({
        description:'quantity',
        type: 'number',
    })
    //số lượng
    quantity: number
    @ApiProperty({
        description: 'scholarship excellence',
        type: 'string',
    })
    //ưu đãi học bổng
    scholarshipExcellence: string
    route: number
    price: number
}
