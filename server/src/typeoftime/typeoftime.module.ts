import { Module } from '@nestjs/common';
import { TypeoftimeService } from './typeoftime.service';
import { TypeoftimeController } from './typeoftime.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Typeoftime } from './entities/typeoftime.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Typeoftime])],
  controllers: [TypeoftimeController],
  providers: [TypeoftimeService],
})
export class TypeoftimeModule {}
