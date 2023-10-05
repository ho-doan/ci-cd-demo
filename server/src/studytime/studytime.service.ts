import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateStudytimeDto } from './dto/create-studytime.dto';
import { UpdateStudytimeDto } from './dto/update-studytime.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Studytime } from './entities/studytime.entity';
import { Repository } from 'typeorm';

@Injectable()
export class StudytimeService {
  constructor(
    @InjectRepository(Studytime)
    private repository: Repository<Studytime>,
  ) {}
  async create(CreateStudytimeDto: CreateStudytimeDto) {
    try {
      return await this.repository.save({
        nameTime: CreateStudytimeDto.nameTime,
        tyOfTime:{
          id: CreateStudytimeDto.tyOfTime
        },
      });
    } catch (error) {
      return new InternalServerErrorException();
    }
  }

  findAll() {
    return this.repository.find();
  }

  findOne(id: number) {
    return this.repository.findOneBy({ id: id });
  }

  async update(id: number, UpdateStudytimeDto: UpdateStudytimeDto) {
    console.log('tyOfTime' , UpdateStudytimeDto.tyOfTime);
    const rec = await this.findOne(id);
    if (rec === undefined) {
      throw new NotFoundException();
    }
    const studyTime = new Studytime();
    studyTime.nameTime = UpdateStudytimeDto.nameTime;
    return this.repository.update(id, studyTime);
  }

  async remove(id: number) {
    const rec = await this.findOne(id);
    if (rec === undefined) {
      throw new NotFoundException();
    }
    return this.repository.delete(id);
  }
}
