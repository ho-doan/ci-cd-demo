import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateOpeninscheduleDto } from './dto/create-openinschedule.dto';
import { UpdateOpeninscheduleDto } from './dto/update-openinschedule.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Openinschedule } from './entities/openinschedule.entity';
import { Repository } from 'typeorm';

@Injectable()
export class OpeninscheduleService {
  constructor(
    @InjectRepository(Openinschedule)
    private repository: Repository<Openinschedule>,
  ) {}
  async create(CreateOpeninscheduleDto: CreateOpeninscheduleDto) {
    try {
      return await this.repository.save({
        course:{
          id: CreateOpeninscheduleDto.course
        },
        openingDay: CreateOpeninscheduleDto.openingDay,
        school:{
          id: CreateOpeninscheduleDto.school
        },
        schedule: CreateOpeninscheduleDto.schedule,
        time: CreateOpeninscheduleDto.time,
        totalNumberOfStudents: CreateOpeninscheduleDto.totalNumberOfStudents,
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

  async update(id: number, UpdateOpeninscheduleDto: UpdateOpeninscheduleDto) {
    console.log('course', UpdateOpeninscheduleDto.course);
    console.log('school', UpdateOpeninscheduleDto.school);
    const rec = await this.findOne(id);
    if (rec === undefined) {
      throw new NotFoundException();
    }
    const openInSchedule = new Openinschedule();
    openInSchedule.openingDay = UpdateOpeninscheduleDto.openingDay;
    openInSchedule.schedule = UpdateOpeninscheduleDto.schedule;
    openInSchedule.time = UpdateOpeninscheduleDto.time;
    openInSchedule.totalNumberOfStudents = UpdateOpeninscheduleDto.totalNumberOfStudents;
    return this.repository.update(id, openInSchedule);
  }

  async remove(id: number) {
    const rec = await this.findOne(id);
    if (rec === undefined) {
      throw new NotFoundException();
    }
    return this.repository.delete(id);
  }
}
