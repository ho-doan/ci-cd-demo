import { Module } from '@nestjs/common';
import { RegisterforstudyService } from './registerforstudy.service';
import { RegisterforstudyController } from './registerforstudy.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Registerforstudy } from './entities/registerforstudy.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Registerforstudy])],
  controllers: [RegisterforstudyController],
  providers: [RegisterforstudyService],
})
export class RegisterforstudyModule {}
