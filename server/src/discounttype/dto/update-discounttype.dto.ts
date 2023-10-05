import { PartialType } from '@nestjs/swagger';
import { CreateDiscounttypeDto } from './create-discounttype.dto';

export class UpdateDiscounttypeDto extends PartialType(CreateDiscounttypeDto) {}
