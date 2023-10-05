import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';
import { Department } from './entities/department.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class DepartmentService {
  constructor(
    @InjectRepository(Department)
    private repository: Repository<Department>,
  ) {}
  async create(createDepartmentDto: CreateDepartmentDto) {
    try {
      return await this.repository.save({
        name: createDepartmentDto.name,
        school: {
          id: createDepartmentDto.school,
        }
      })
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

  async update(id: number, updateSDepartmentDto: UpdateDepartmentDto) {
    console.log('school',updateSDepartmentDto.school)
    const rec = await this.findOne(id);
    if (rec === undefined) {
      throw new NotFoundException();
    }
    const department = new Department();
    department.name = updateSDepartmentDto.name;
    return this.repository.update(id, department);
  }

  async remove(id: number) {
    const rec = await this.findOne(id);
    if (rec === undefined) {
      throw new NotFoundException();
    }
    return this.repository.delete(id);
  }
}
