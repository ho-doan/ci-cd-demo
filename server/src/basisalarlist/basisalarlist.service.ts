import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBasisalarlistDto } from './dto/create-basisalarlist.dto';
import { UpdateBasisalarlistDto } from './dto/update-basisalarlist.dto';
import { Basisalarlist } from './entities/basisalarlist.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class BasisalarlistService {
  constructor(
    @InjectRepository(Basisalarlist)
    private repository: Repository<Basisalarlist>,
  ) {}
  async create(CreateBasisalarlistDto: CreateBasisalarlistDto) {
    return await this.repository.save({
      coefficientsSalary: CreateBasisalarlistDto.coefficientsSalary,
      basicSalary: CreateBasisalarlistDto.basicSalary,
      startDay: CreateBasisalarlistDto.startDay,
      endDay: CreateBasisalarlistDto.endDay,
    });
  }

  findAll() {
    return this.repository.find();
  }

  findOne(id: number) {
    return this.repository.findOneBy({ id: id });
  }

  async update(id: number, UpdateBasisalarlistDto: UpdateBasisalarlistDto) {
    const rec = await this.findOne(id);
    if (rec === undefined) {
      throw new NotFoundException();
    }
    const basisalarlist = new Basisalarlist();
    basisalarlist.coefficientsSalary = UpdateBasisalarlistDto.coefficientsSalary;
    basisalarlist.basicSalary = UpdateBasisalarlistDto.basicSalary;
    basisalarlist.startDay = UpdateBasisalarlistDto.startDay;
    basisalarlist.endDay= UpdateBasisalarlistDto.endDay;
    return this.repository.update(id, basisalarlist);
  }

  async remove(id: number) {
    const rec = await this.findOne(id);
    if (rec === undefined) {
      throw new NotFoundException();
    }
    return this.repository.delete(id);
  }
}
