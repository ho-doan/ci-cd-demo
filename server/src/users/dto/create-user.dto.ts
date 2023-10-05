import { ApiProperty } from '@nestjs/swagger';
export class CreateUserDto {
  @ApiProperty({
    description: 'full name user',
    type: 'string',
    default: 'Nguyen Van A',
  })
  name: string;
}
