import { Module } from '@nestjs/common';
import { DiscounttypeService } from './discounttype.service';
import { DiscounttypeController } from './discounttype.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Discounttype } from './entities/discounttype.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Discounttype])],
  controllers: [DiscounttypeController],
  providers: [DiscounttypeService],
})
export class DiscounttypeModule {}
