import { PartialType } from '@nestjs/swagger';
import { CreateRoutetypeDto } from './create-routetype.dto';

export class UpdateRoutetypeDto extends PartialType(CreateRoutetypeDto) {}
