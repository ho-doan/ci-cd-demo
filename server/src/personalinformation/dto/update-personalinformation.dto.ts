import { PartialType } from '@nestjs/swagger';
import { CreatePersonalinformationDto } from './create-personalinformation.dto';

export class UpdatePersonalinformationDto extends PartialType(CreatePersonalinformationDto) {}
