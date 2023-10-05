import { PartialType } from '@nestjs/swagger';
import { CreateWageDto } from './create-wage.dto';

export class UpdateWageDto extends PartialType(CreateWageDto) {}
