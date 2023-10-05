import { Module } from '@nestjs/common';
import { RoutetypeService } from './routetype.service';
import { RoutetypeController } from './routetype.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Routetype } from './entities/routetype.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Routetype])],
  controllers: [RoutetypeController],
  providers: [RoutetypeService],
})
export class RoutetypeModule {}
