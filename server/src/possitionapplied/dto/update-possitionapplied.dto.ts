import { PartialType } from '@nestjs/swagger';
import { CreatePossitionappliedDto } from './create-possitionapplied.dto';

export class UpdatePossitionappliedDto extends PartialType(CreatePossitionappliedDto) {}
