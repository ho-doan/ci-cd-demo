import { Module } from '@nestjs/common';
import { PersonalinformationService } from './personalinformation.service';
import { PersonalinformationController } from './personalinformation.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Personalinformation } from './entities/personalinformation.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Personalinformation])],
  controllers: [PersonalinformationController],
  providers: [PersonalinformationService],
})
export class PersonalinformationModule {}
