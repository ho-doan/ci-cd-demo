import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateLessonDto } from './dto/create-lesson.dto';
import { UpdateLessonDto } from './dto/update-lesson.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Lesson } from './entities/lesson.entity';
import { Repository } from 'typeorm';

@Injectable()
export class LessonService {
  constructor(
    @InjectRepository(Lesson)
    private repository: Repository<Lesson>,
  ) {}
  async create(CreateLessonDto: CreateLessonDto) {
    try {
      return await this.repository.save({
        name: CreateLessonDto.name,
        route: {
          id: CreateLessonDto.route
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

  async update(id: number, UpdateLessonDto: UpdateLessonDto) {
    console.log('route' , UpdateLessonDto.route);
    const rec = await this.findOne(id);
    if (rec === undefined) {
      throw new NotFoundException();
    }
    const lesson = new Lesson();
    lesson.name = UpdateLessonDto.name;
    return this.repository.update(id, lesson);
  }

  async remove(id: number) {
    const rec = await this.findOne(id);
    if (rec === undefined) {
      throw new NotFoundException();
    }
    return this.repository.delete(id);
  }
}
