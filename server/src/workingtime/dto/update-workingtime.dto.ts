import { PartialType } from '@nestjs/swagger';
import { CreateWorkingtimeDto } from './create-workingtime.dto';

export class UpdateWorkingtimeDto extends PartialType(CreateWorkingtimeDto) {}
