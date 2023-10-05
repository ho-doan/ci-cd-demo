import { ApiProperty } from "@nestjs/swagger";

//loại giảm giá
export class CreateDiscounttypeDto {
    @ApiProperty({
        description: 'name',
        type: 'string',
    })
    name: string
}
