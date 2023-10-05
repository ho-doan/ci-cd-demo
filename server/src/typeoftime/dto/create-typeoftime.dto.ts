import { ApiProperty } from "@nestjs/swagger";

//loại thời gian
export class CreateTypeoftimeDto {
@ApiProperty({
    description: 'type of time',
    type: 'string',
})
typeOfTime: string
}
