import { PartialType } from '@nestjs/swagger';
import { CreateStudytimeDto } from './create-studytime.dto';

export class UpdateStudytimeDto extends PartialType(CreateStudytimeDto) {}
