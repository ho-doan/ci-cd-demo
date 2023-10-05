import { ApiProperty } from "@nestjs/swagger";

//Học vấn
export class CreateEducationDto {
    @ApiProperty({
        description: 'medium score education',
        type: 'number',
    })
    //điểm trung bình
    mediumScore:  number
    @ApiProperty({
        description: 'graduation education',
        type: 'datetime',
    })
    //năm tốt nghiệp
    graduation: Date
    school: number
}
