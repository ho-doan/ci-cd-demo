import { Module } from '@nestjs/common';
import { WageService } from './wage.service';
import { WageController } from './wage.controller';
import { Wage } from './entities/wage.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([Wage])],
  controllers: [WageController],
  providers: [WageService],
})
export class WageModule {}
