import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateDiscounttypeDto } from './dto/create-discounttype.dto';
import { UpdateDiscounttypeDto } from './dto/update-discounttype.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Discounttype } from './entities/discounttype.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DiscounttypeService {
  constructor(
    @InjectRepository(Discounttype)
    private repository: Repository<Discounttype>,
  ) {}
  async create(CreateDiscounttypeDto: CreateDiscounttypeDto) {
    return await this.repository.save({
      name: CreateDiscounttypeDto.name,
    });
  }

  findAll() {
    return this.repository.find();
  }

  findOne(id: number) {
    return this.repository.findOneBy({ id: id });
  }

  async update(id: number, UpdateDiscounttypeDto: UpdateDiscounttypeDto) {
    const rec = await this.findOne(id);
    if (rec === undefined) {
      throw new NotFoundException();
    }
    const disCountType = new Discounttype();
    disCountType.name = UpdateDiscounttypeDto.name;
    return this.repository.update(id, disCountType);
  }

  async remove(id: number) {
    const rec = await this.findOne(id);
    if (rec === undefined) {
      throw new NotFoundException();
    }
    return this.repository.delete(id);
  }
}
