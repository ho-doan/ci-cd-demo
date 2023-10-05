import { ApiProperty } from "@nestjs/swagger";
//vị trí tuyển dụng
export class CreateVacancyDto {
    @ApiProperty({
        description: 'name',
        type: 'string',
    })
    name:string
    @ApiProperty({
        description: 'job description',
        type: 'string',
    })
    //Mô tả công việc
    jobDescription:string
    @ApiProperty({
        description: 'job requirements',
        type: 'string',
    })
    //yêu cầu công việc
    jobRequirements: string
}
