import { ApiProperty } from "@nestjs/swagger";

export class CreateDepartmentDto {
    @ApiProperty({
        description: 'name department',
        type: 'string',
    })
    name:string
    school: number
}
