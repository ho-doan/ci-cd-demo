import { Module } from '@nestjs/common';
import { StudytimeService } from './studytime.service';
import { StudytimeController } from './studytime.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Studytime } from './entities/studytime.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Studytime])],
  controllers: [StudytimeController],
  providers: [StudytimeService],
})
export class StudytimeModule {}
