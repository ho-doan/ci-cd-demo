import { Module } from '@nestjs/common';
import { WorkingformService } from './workingform.service';
import { WorkingformController } from './workingform.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WorkingForm } from './entities/workingform.entity';

@Module({
  imports:[TypeOrmModule.forFeature([WorkingForm])],
  controllers: [WorkingformController],
  providers: [WorkingformService],
})
export class WorkingformModule {}
