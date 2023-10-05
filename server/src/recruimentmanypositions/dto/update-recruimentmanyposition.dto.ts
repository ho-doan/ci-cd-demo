import { PartialType } from '@nestjs/swagger';
import { CreateRecruimentmanypositionDto } from './create-recruimentmanyposition.dto';

export class UpdateRecruimentmanypositionDto extends PartialType(CreateRecruimentmanypositionDto) {}
