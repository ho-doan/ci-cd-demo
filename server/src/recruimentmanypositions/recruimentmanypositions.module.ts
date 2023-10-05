import { Module } from '@nestjs/common';
import { RecruimentmanypositionsService } from './recruimentmanypositions.service';
import { RecruimentmanypositionsController } from './recruimentmanypositions.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Recruimentmanyposition } from './entities/recruimentmanyposition.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Recruimentmanyposition])],
  controllers: [RecruimentmanypositionsController],
  providers: [RecruimentmanypositionsService],
})
export class RecruimentmanypositionsModule {}
