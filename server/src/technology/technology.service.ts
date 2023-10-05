import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTechnologyDto } from './dto/create-technology.dto';
import { UpdateTechnologyDto } from './dto/update-technology.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Technology } from './entities/technology.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TechnologyService {
  constructor(
    @InjectRepository(Technology)
    private repository: Repository<Technology>,
  ) {}
  async create(CreateTechnologyDto: CreateTechnologyDto) {
    return await this.repository.save({
      name: CreateTechnologyDto.name,
    });
  }

  findAll() {
    return this.repository.find();
  }

  findOne(id: number) {
    return this.repository.findOneBy({ id: id });
  }

  async update(id: number, UpdateTechnologyDto: UpdateTechnologyDto) {
    const rec = await this.findOne(id);
    if (rec === undefined) {
      throw new NotFoundException();
    }
    const technology = new Technology();
    technology.name = UpdateTechnologyDto.name;
    return this.repository.update(id, technology);
  }

  async remove(id: number) {
    const rec = await this.findOne(id);
    if (rec === undefined) {
      throw new NotFoundException();
    }
    return this.repository.delete(id);
  }
}
