import { ApiProperty } from "@nestjs/swagger";

//Giảm giá
export class CreateDiscountDto {
    @ApiProperty({
        description: 'name',
        type: 'string',
    })
    name: string
    @ApiProperty({
        description: 'discount',
        type: 'number',
    })
    //giảm giá
    discount: number
    @ApiProperty({
        description: 'start day',
        type: 'Date',
    })
    startDay: Date
    @ApiProperty({
        description: 'end day',
        type: 'Date',
    })
    endDay: Date
    discountType: number
}
