import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateWageDto } from './dto/create-wage.dto';
import { UpdateWageDto } from './dto/update-wage.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Wage } from './entities/wage.entity';
import { Repository } from 'typeorm';

@Injectable()
export class WageService {
  constructor(
    @InjectRepository(Wage)
    private repository: Repository<Wage>,
  ) {}
  async create(CreateWageDto: CreateWageDto) {
    try {
      return await this.repository.save({
        allowance:{
          id: CreateWageDto.allowance,
        },
        basicSalaryList:{
          id: CreateWageDto.basicSalaryList
        },
        workingTime:{
          id: CreateWageDto.workingTime
        }
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

  async update(id: number, UpdateWageDto: UpdateWageDto) {
    console.log('allowance', UpdateWageDto.allowance);
    console.log('basicSalaryList', UpdateWageDto.basicSalaryList);
    console.log('workingTime', UpdateWageDto.workingTime);
    const rec = await this.findOne(id);
    if (rec === undefined) {
      throw new NotFoundException();
    }
    const wage = new Wage();
    return this.repository.update(id, wage);
  }

  async remove(id: number) {
    const rec = await this.findOne(id);
    if (rec === undefined) {
      throw new NotFoundException();
    }
    return this.repository.delete(id);
  }
}
