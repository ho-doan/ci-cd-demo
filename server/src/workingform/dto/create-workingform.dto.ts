import { ApiProperty } from "@nestjs/swagger";
import { Column } from "typeorm";

export class CreateWorkingFormDto {
    @ApiProperty({
        description: 'name',
        type: 'string'
    })
    name: string;
    wage: number;
}
