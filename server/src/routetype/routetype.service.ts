import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateRoutetypeDto } from './dto/create-routetype.dto';
import { UpdateRoutetypeDto } from './dto/update-routetype.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Routetype } from './entities/routetype.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RoutetypeService {
  constructor(
    @InjectRepository(Routetype)
    private repository: Repository<Routetype>,
  ) {}
  async create(CreateRoutetypeDto: CreateRoutetypeDto) {
    return await this.repository.save({
      typeName: CreateRoutetypeDto.typeName,
      time: CreateRoutetypeDto.time,
    });
  }

  findAll() {
    return this.repository.find();
  }

  findOne(id: number) {
    return this.repository.findOneBy({ id: id });
  }

  async update(id: number, UpdateRoutetypeDto: UpdateRoutetypeDto) {
    const rec = await this.findOne(id);
    if (rec === undefined) {
      throw new NotFoundException();
    }
    const routeType = new Routetype();
    routeType.typeName = UpdateRoutetypeDto.typeName,
    routeType.time = UpdateRoutetypeDto.time;
    return this.repository.update(id, routeType);
  }

  async remove(id: number) {
    const rec = await this.findOne(id);
    if (rec === undefined) {
      throw new NotFoundException();
    }
    return this.repository.delete(id);
  }
}
