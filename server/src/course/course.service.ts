import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Course } from './entities/course.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CourseService {
  constructor(
    @InjectRepository(Course)
    private repository: Repository<Course>,
  ) {}
  async create(CreateCourseDto: CreateCourseDto) {
    try {
      return await this.repository.save({
        name: CreateCourseDto.name,
        route:{
          id: CreateCourseDto.route
        },
        price:{
          id: CreateCourseDto.price
        },
        content: CreateCourseDto.content,
        quantity: CreateCourseDto.quantity,
        scholarshipExcellence: CreateCourseDto.scholarshipExcellence,
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

  async update(id: number, UpdateCourseDto: UpdateCourseDto) {
    console.log('route', UpdateCourseDto.route);
    console.log('price', UpdateCourseDto.price);
    const rec = await this.findOne(id);
    if (rec === undefined) {
      throw new NotFoundException();
    }
    const course = new Course();
    course.name = UpdateCourseDto.name;
    course.content = UpdateCourseDto.content;
    course.quantity = UpdateCourseDto.quantity;
    course.scholarshipExcellence = UpdateCourseDto.scholarshipExcellence;
    return this.repository.update(id, course);
  }

  async remove(id: number) {
    const rec = await this.findOne(id);
    if (rec === undefined) {
      throw new NotFoundException();
    }
    return this.repository.delete(id);
  }
}
