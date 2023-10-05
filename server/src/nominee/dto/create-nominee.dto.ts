import { ApiProperty } from "@nestjs/swagger";

//vị trí ứng tuyển
export class CreateNomineeDto {
    @ApiProperty({
        description: 'name',
        type: 'string',
    })
    name:string
    positionApplied: number
    wage: number
}
