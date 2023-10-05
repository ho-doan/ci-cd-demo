import { ApiProperty } from "@nestjs/swagger";

//danh mục lương cơ bản
export class CreateBasisalarlistDto {
    @ApiProperty({
        description:'coefficients salary',
        type: 'number',
    })
    //hệ số lương
    coefficientsSalary:number
    @ApiProperty({
        description: 'basic salary',
        type: 'number',
    })
    //lương cơ bản
    basicSalary: number
    @ApiProperty({
        description:'start day',
        type: 'Date',
    })
    //ngày bắt đầu
    startDay: Date
    @ApiProperty({
        description: 'end day',
        type:'Date',
    })
    //ngày kết thúc
    endDay:Date
}
