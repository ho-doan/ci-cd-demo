import { ApiProperty } from "@nestjs/swagger";

//tuyển dụng nhiều vị trí
export class CreateRecruimentmanypositionDto {
    @ApiProperty({
        description: 'work experience ',
        type: 'string',
    })
    //kinh nghiệm làm việc
    workexperience: string
    @ApiProperty({
        description: 'application status',
        type: 'string'
    })
    //trạng thái ứng tuyển
    applicationstatus: string
    @ApiProperty({
        description: 'confirm employment',
        type: 'string'
    })
    //xác nhận vào làm
    confirmemployment: string
    recruitment:number
    vanCanCy: number
    technology:number
    contract:number
}
