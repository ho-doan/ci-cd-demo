import { ApiProperty } from "@nestjs/swagger";

//lịch khai giảng
export class CreateOpeninscheduleDto {
    @ApiProperty({
        description: 'opening day',
        type: 'Date',
    })
    //ngày khai giảng
    openingDay: Date
    @ApiProperty({
        description: 'schedule',
        type: 'Date',
    })
    schedule:Date
    @ApiProperty({
        description: 'time',
        type: 'number',
    })
    time: number
    @ApiProperty({
        description: 'total number of students',
        type: 'number',
    })
    //tổng số học viên
    totalNumberOfStudents: number
    course: number
    school: number
}
