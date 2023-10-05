import { ApiProperty } from '@nestjs/swagger';

export enum RecruitmentType {
  fullTime,
  partTime,
}

export class CreateRecruitmentDto {
  @ApiProperty({
    description: 'experience recruitment',
    type: 'string',
  })
  //kinh nghiệm
  experience:string
  @ApiProperty({
    description: 'language',
    type: 'string'
  })
  //ngôn ngữ
  language: string
  @ApiProperty({
    description: 'language certificate',
    type: 'string',
  })
  //giấy chứng nhận ngôn ngữ
  languageCertificate:string
  @ApiProperty({
    description: 'file',
    type: 'string',
  })
  //hồ sơ
  file:string
  education: number
  personalInformation:number
  workingForm:number
  school:number
  workingTime:number
  //TODO:db cũ----------------------------------------------------------------------
  // name: string;
  // exp: Date;
  // type: RecruitmentType;
  // image: string;
  //TODO(hodoan): add location relation
  //   location: <Location>
  //TODO(hodoan): add tags relation
  //   tags: List<Location>
}
