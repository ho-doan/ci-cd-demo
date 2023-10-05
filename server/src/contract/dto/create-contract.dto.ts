import { ApiProperty } from "@nestjs/swagger";

//hợp đồng
export class CreateContractDto {
@ApiProperty({
    description: 'start day',
    type:'Date'
})
startDay:Date
@ApiProperty({
    description: 'end day',
    type: 'Date'
})
endDay: Date
@ApiProperty({
    description:'sigh day',
    type:'Date',
})
sighDay:Date
@ApiProperty({
    description: 'content',
    type: 'string',
})
content:string
@ApiProperty({
    description: 'signature times',
    type: 'number',
})
signatureTimes: number
@ApiProperty({
    description: 'duration',
    type: 'string',
})
duration:string
@ApiProperty({
    description:'wage agreement',
    type:'number'
})
wageAgreement: number
nominee: number
}
