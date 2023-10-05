import { ApiProperty } from "@nestjs/swagger";
import { Column } from "typeorm";

//Địa điểm
export class CreateLocationDto {
    @ApiProperty({
        description: 'Name of the entity',
        type: 'string',
    })
    name: string;
    @ApiProperty({
        description: 'address of the entity',
        type: 'string',
    })
    address:string;
    @ApiProperty({
        description: 'note of the entity',
        type: 'string',
    })
    note:string;
    @ApiProperty({
        description:'email of the entity',
        type: 'string',    
    })
    email:string;
  school: number;
}
