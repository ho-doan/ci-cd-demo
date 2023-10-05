import { ApiProperty } from "@nestjs/swagger";
//Trường
export class CreateSchoolDto {
    @ApiProperty({
        description: 'name school',
        type:'string'
      })
      name: string;
}
