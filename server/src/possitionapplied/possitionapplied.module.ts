import { Module } from '@nestjs/common';
import { PossitionappliedService } from './possitionapplied.service';
import { PossitionappliedController } from './possitionapplied.controller';
import { Possitionapplied } from './entities/possitionapplied.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Possitionapplied])],
  controllers: [PossitionappliedController],
  providers: [PossitionappliedService],
})
export class PossitionappliedModule {}
