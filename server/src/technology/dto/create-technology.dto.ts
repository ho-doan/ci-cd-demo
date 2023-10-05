import { ApiProperty } from "@nestjs/swagger";

//công nghệ
export class CreateTechnologyDto {
    @ApiProperty({
        description: 'name technology',
        type: 'string',
    })
    name:string
}
