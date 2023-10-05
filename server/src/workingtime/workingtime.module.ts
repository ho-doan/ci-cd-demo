import { Module } from '@nestjs/common';
import { WorkingtimeService } from './workingtime.service';
import { WorkingtimeController } from './workingtime.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WorkingTime } from './entities/workingtime.entity';

@Module({
  imports:[TypeOrmModule.forFeature([WorkingTime])],
  controllers: [WorkingtimeController],
  providers: [WorkingtimeService],
})
export class WorkingtimeModule {}
