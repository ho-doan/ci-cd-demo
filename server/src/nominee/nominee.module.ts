import { Module } from '@nestjs/common';
import { NomineeService } from './nominee.service';
import { NomineeController } from './nominee.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Nominee } from './entities/nominee.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Nominee])],
  controllers: [NomineeController],
  providers: [NomineeService],
})
export class NomineeModule {}
