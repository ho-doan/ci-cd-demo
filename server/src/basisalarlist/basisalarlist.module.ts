import { Module } from '@nestjs/common';
import { BasisalarlistService } from './basisalarlist.service';
import { BasisalarlistController } from './basisalarlist.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Basisalarlist } from './entities/basisalarlist.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Basisalarlist])],
  controllers: [BasisalarlistController],
  providers: [BasisalarlistService],
})
export class BasisalarlistModule {}
