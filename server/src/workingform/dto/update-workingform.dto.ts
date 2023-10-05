import { PartialType } from '@nestjs/swagger';
import { CreateWorkingFormDto } from './create-workingform.dto';

export class UpdateWorkingFormDto extends PartialType(CreateWorkingFormDto) {}
