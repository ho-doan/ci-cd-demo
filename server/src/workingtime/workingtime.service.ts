import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateWorkingtimeDto } from './dto/create-workingtime.dto';
import { UpdateWorkingtimeDto } from './dto/update-workingtime.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { WorkingTime } from './entities/workingtime.entity';
import { Repository } from 'typeorm';

@Injectable()
export class WorkingtimeService {
  constructor(
    @InjectRepository(WorkingTime)
    private repository: Repository<WorkingTime>,
  ) {}
  async create(CreateWorkingtimeDto: CreateWorkingtimeDto) {
    return await this.repository.save({
      startDay: CreateWorkingtimeDto.startDay,
      endDay: CreateWorkingtimeDto.endDay,
    });
  }

  findAll() {
    return this.repository.find();
  }

  findOne(id: number) {
    return this.repository.findOneBy({ id: id });
  }

  async update(id: number, UpdateWorkingtimeDto: UpdateWorkingtimeDto) {
    const rec = await this.findOne(id);
    if (rec === undefined) {
      throw new NotFoundException();
    }
    const workingtime = new WorkingTime();
    workingtime.startDay = UpdateWorkingtimeDto.startDay;
    workingtime.endDay = UpdateWorkingtimeDto.endDay;
    return this.repository.update(id, workingtime);
  }

  async remove(id: number) {
    const rec = await this.findOne(id);
    if (rec === undefined) {
      throw new NotFoundException();
    }
    return this.repository.delete(id);
  }
}
