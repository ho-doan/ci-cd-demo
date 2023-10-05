import { ApiProperty } from "@nestjs/swagger";
import { Discount } from "src/discount/entities/discount.entity";

//giá
export class CreatePriceDto {
    @ApiProperty({
        description: 'price',
        type: 'number',
    })
    price: number
    discount: number
}
