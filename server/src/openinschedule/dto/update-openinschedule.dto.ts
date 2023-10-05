import { PartialType } from '@nestjs/swagger';
import { CreateOpeninscheduleDto } from './create-openinschedule.dto';

export class UpdateOpeninscheduleDto extends PartialType(CreateOpeninscheduleDto) {}
