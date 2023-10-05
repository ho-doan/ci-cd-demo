import { ApiProperty } from "@nestjs/swagger";

//thời gian làm việc
export class CreateWorkingtimeDto {
    @ApiProperty({
        description: 'start day',
        type: 'Date',
    })
    startDay:Date
    @ApiProperty({
        description:'end day',
        type: 'Date',
    })
    endDay: Date
}
