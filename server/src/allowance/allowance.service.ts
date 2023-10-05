import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAllowanceDto } from './dto/create-allowance.dto';
import { UpdateAllowanceDto } from './dto/update-allowance.dto';
import { Allowance } from './entities/allowance.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class AllowanceService {
  constructor(
    @InjectRepository(Allowance)
    private repository: Repository<Allowance>,
  ) {}
  async create(CreateAllowanceDto: CreateAllowanceDto) {
    return await this.repository.save({
      allowanceCoefficient: CreateAllowanceDto.allowanceCoefficient,
      subsidiesSalary: CreateAllowanceDto.subsidiesSalary,
      startDay: CreateAllowanceDto.startDay,
      endDay: CreateAllowanceDto.endDay,
    });
  }

  findAll() {
    return this.repository.find();
  }

  findOne(id: number) {
    return this.repository.findOneBy({ id: id });
  }

  async update(id: number, UpdateAllowanceDto: UpdateAllowanceDto) {
    const rec = await this.findOne(id);
    if (rec === undefined) {
      throw new NotFoundException();
    }
    const allowance = new Allowance();
    allowance.allowanceCoefficient = UpdateAllowanceDto.allowanceCoefficient;
    allowance.subsidiesSalary = UpdateAllowanceDto.subsidiesSalary;
    allowance.startDay = UpdateAllowanceDto.startDay;
    allowance.endDay= UpdateAllowanceDto.endDay;
    return this.repository.update(id, allowance);
  }

  async remove(id: number) {
    const rec = await this.findOne(id);
    if (rec === undefined) {
      throw new NotFoundException();
    }
    return this.repository.delete(id);
  }
}
