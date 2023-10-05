import { Module } from '@nestjs/common';
import { OpeninscheduleService } from './openinschedule.service';
import { OpeninscheduleController } from './openinschedule.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Openinschedule } from './entities/openinschedule.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Openinschedule])],
  controllers: [OpeninscheduleController],
  providers: [OpeninscheduleService],
})
export class OpeninscheduleModule {}
