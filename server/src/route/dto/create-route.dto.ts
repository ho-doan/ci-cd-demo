import { ApiProperty } from "@nestjs/swagger";

//lộ trình
export class CreateRouteDto {
    @ApiProperty({
        description: 'name route',
        type: 'string',
    })
    nameRoute: string
    @ApiProperty({
        description: 'time',
        type: 'number',
    })
    time: number
    routeType: number
}
