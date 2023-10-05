import { ApiProperty } from "@nestjs/swagger";

//bài học
export class CreateLessonDto {
    @ApiProperty({
        description: 'name',
        type: 'string',
    })
    name: string
    route: number
}
