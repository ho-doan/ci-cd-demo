import { ApiProperty } from "@nestjs/swagger";

//Thông tin cá nhân
export class CreatePersonalinformationDto {
    @ApiProperty({
        description: 'fullname',
        type: 'string'
    })
    fullName: string
    @ApiProperty({
        description: 'dayOfBirth',
        type: 'Date',
    })
    dayOfBirth: Date
    @ApiProperty({
        description: 'sex',
        type: 'string',
    })
    sex: string
    @ApiProperty({
        description: 'phone',
        type: 'string',
    })
    phone: number
    @ApiProperty({
        description: 'email',
        type: 'string',
    })
    email: string
}
