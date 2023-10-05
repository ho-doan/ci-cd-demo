import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateWorkingFormDto } from './dto/create-workingform.dto';
import { UpdateWorkingFormDto } from './dto/update-workingform.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { WorkingForm } from './entities/workingform.entity';
import { Repository } from 'typeorm';

@Injectable()
export class WorkingformService {
  constructor(
    @InjectRepository(WorkingForm)
    private repository: Repository<WorkingForm>,
  ) {}
  async create(CreateWorkingFormDto: CreateWorkingFormDto) {
    try {
      return await this.repository.save({
        name: CreateWorkingFormDto.name,
        wage:{
          id: CreateWorkingFormDto.wage,
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

  async update(id: number, UpdateWorkingFormDto: UpdateWorkingFormDto) {
    console.log('wage', UpdateWorkingFormDto.wage);
    const rec = await this.findOne(id);
    if (rec === undefined) {
      throw new NotFoundException();
    }
    const worKingForm = new WorkingForm();
    worKingForm.name = UpdateWorkingFormDto.name;
    return this.repository.update(id, worKingForm);
  }

  async remove(id: number) {
    const rec = await this.findOne(id);
    if (rec === undefined) {
      throw new NotFoundException();
    }
    return this.repository.delete(id);
  }
}
