import { ApiProperty } from "@nestjs/swagger";

//phụ cấp
export class CreateAllowanceDto {
    @ApiProperty({
        description: 'allowance coefficient',
        type: 'number'
    })
    //hệ số phụ cấp
    allowanceCoefficient:number
    @ApiProperty({
        description: 'subsidies salary',
        type: 'number',
    })
    //lương phụ cấp
    subsidiesSalary: number
    @ApiProperty({
        description: 'start day',
        type:'Date'
    })
    //ngày bắt đầu
    startDay: Date
    @ApiProperty({
        description: 'end day',
        type: 'Date'
    })
    endDay:Date
}
