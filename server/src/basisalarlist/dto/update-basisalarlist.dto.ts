import { PartialType } from '@nestjs/swagger';
import { CreateBasisalarlistDto } from './create-basisalarlist.dto';

export class UpdateBasisalarlistDto extends PartialType(CreateBasisalarlistDto) {}
