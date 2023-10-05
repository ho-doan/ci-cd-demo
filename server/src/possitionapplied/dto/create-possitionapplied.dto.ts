import { ApiProperty } from "@nestjs/swagger";

//loại vị trí ứng tuyển
export class CreatePossitionappliedDto {
    @ApiProperty({
        description:'name',
        type: 'string',
    })
    name:string
}
