import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePossitionappliedDto } from './dto/create-possitionapplied.dto';
import { UpdatePossitionappliedDto } from './dto/update-possitionapplied.dto';
import { Possitionapplied } from './entities/possitionapplied.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class PossitionappliedService {
  constructor(
    @InjectRepository(Possitionapplied)
    private repository: Repository<Possitionapplied>,
  ) {}
  async create(CreatePossitionappliedDto: CreatePossitionappliedDto) {
    return await this.repository.save({
      name: CreatePossitionappliedDto.name,
    });
  }

  findAll() {
    return this.repository.find();
  }

  findOne(id: number) {
    return this.repository.findOneBy({ id: id });
  }

  async update(id: number, UpdatePossitionappliedDto: UpdatePossitionappliedDto) {
    const rec = await this.findOne(id);
    if (rec === undefined) {
      throw new NotFoundException();
    }
    const possitionapplied = new Possitionapplied();
    possitionapplied.name = UpdatePossitionappliedDto.name;
    return this.repository.update(id, possitionapplied);
  }

  async remove(id: number) {
    const rec = await this.findOne(id);
    if (rec === undefined) {
      throw new NotFoundException();
    }
    return this.repository.delete(id);
  }
}
