import { ApiProperty } from "@nestjs/swagger";

//thời gian học
export class CreateStudytimeDto {
    @ApiProperty({
        description: 'name time',
        type: 'string',
    })
    nameTime:string
    tyOfTime: number
}
