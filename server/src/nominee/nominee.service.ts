import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateNomineeDto } from './dto/create-nominee.dto';
import { UpdateNomineeDto } from './dto/update-nominee.dto';
import { Nominee } from './entities/nominee.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class NomineeService {
  constructor(
    @InjectRepository(Nominee)
    private repository: Repository<Nominee>,
  ) {}
  async create(CreateNomineeDto: CreateNomineeDto) {
    try {
      return await this.repository.save({
        name: CreateNomineeDto.name,
        possitionapplied:{
          id: CreateNomineeDto.positionApplied
        },
        wage:{
          id: CreateNomineeDto.wage
        },
      });
    } catch (error) {
      
    }
  }

  findAll() {
    return this.repository.find();
  }

  findOne(id: number) {
    return this.repository.findOneBy({ id: id });
  }

  async update(id: number, UpdateNomineeDto: UpdateNomineeDto) {
    console.log('possitionapplied', UpdateNomineeDto.positionApplied);
    console.log('wage', UpdateNomineeDto.wage);
    const rec = await this.findOne(id);
    if (rec === undefined) {
      throw new NotFoundException();
    }
    const nominee = new Nominee();
    nominee.name = UpdateNomineeDto.name;
    return this.repository.update(id, nominee);
  }

  async remove(id: number) {
    const rec = await this.findOne(id);
    if (rec === undefined) {
      throw new NotFoundException();
    }
    return this.repository.delete(id);
  }
}
