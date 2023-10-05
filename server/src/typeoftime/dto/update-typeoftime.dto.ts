import { PartialType } from '@nestjs/swagger';
import { CreateTypeoftimeDto } from './create-typeoftime.dto';

export class UpdateTypeoftimeDto extends PartialType(CreateTypeoftimeDto) {}
