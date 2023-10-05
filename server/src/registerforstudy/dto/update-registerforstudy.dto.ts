import { PartialType } from '@nestjs/swagger';
import { CreateRegisterforstudyDto } from './create-registerforstudy.dto';

export class UpdateRegisterforstudyDto extends PartialType(CreateRegisterforstudyDto) {}
