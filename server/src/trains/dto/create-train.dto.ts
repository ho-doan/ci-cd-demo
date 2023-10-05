import { ApiProperty } from '@nestjs/swagger';

export class CreateTrainDto {
  @ApiProperty()
  image: string;
  @ApiProperty()
  name: string;
  @ApiProperty()
  time: Date;
  @ApiProperty()
  description: string;
  @ApiProperty()
  price: number;
  @ApiProperty()
  outputCommitment: boolean;
}
