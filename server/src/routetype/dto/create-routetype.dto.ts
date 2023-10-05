import { ApiProperty } from "@nestjs/swagger";

//loại lộ trình
export class CreateRoutetypeDto {
    @ApiProperty({
        description: 'type name',
        type: 'string',
    })
    typeName:string
    @ApiProperty({
        description: 'time',
        type: 'number',
    })
    time: number
}
