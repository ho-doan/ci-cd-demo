import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTypeoftimeDto } from './dto/create-typeoftime.dto';
import { UpdateTypeoftimeDto } from './dto/update-typeoftime.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Typeoftime } from './entities/typeoftime.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TypeoftimeService {
  constructor(
    @InjectRepository(Typeoftime)
    private repository: Repository<Typeoftime>,
  ) {}
  async create(CreateTypeoftimeDto: CreateTypeoftimeDto) {
    return await this.repository.save({
      typeOfTime: CreateTypeoftimeDto.typeOfTime,
    });
  }

  findAll() {
    return this.repository.find();
  }

  findOne(id: number) {
    return this.repository.findOneBy({ id: id });
  }

  async update(id: number, UpdateTypeoftimeDto: UpdateTypeoftimeDto) {
    const rec = await this.findOne(id);
    if (rec === undefined) {
      throw new NotFoundException();
    }
    const typeOfTime = new Typeoftime();
    typeOfTime.typeOfTime = UpdateTypeoftimeDto.typeOfTime;
    return this.repository.update(id, typeOfTime);
  }

  async remove(id: number) {
    const rec = await this.findOne(id);
    if (rec === undefined) {
      throw new NotFoundException();
    }
    return this.repository.delete(id);
  }
}
