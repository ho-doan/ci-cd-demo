import { ApiProperty } from "@nestjs/swagger";

//đăng kí học
export class CreateRegisterforstudyDto {
    @ApiProperty({
        description: 'registration date',
        type: 'Date',
    })
    registrationDate:Date
    personalInformation: number
    openingSchedule: number
    studyTime: number
}
