import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateDiscountDto } from './dto/create-discount.dto';
import { UpdateDiscountDto } from './dto/update-discount.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Discount } from './entities/discount.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DiscountService {
  constructor(
    @InjectRepository(Discount)
    private repository: Repository<Discount>,
  ) {}
  async create(CreateDiscountDto: CreateDiscountDto) {
    try {
      return await this.repository.save({
        name: CreateDiscountDto.name,
        discount: CreateDiscountDto.discount,
        startDay: CreateDiscountDto.startDay,
        endDay: CreateDiscountDto.name,
        discountType: {
          id: CreateDiscountDto.discountType
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

  async update(id: number, UpdateDiscountDto: UpdateDiscountDto) {
    console.log('discountType', UpdateDiscountDto.discountType);
    const rec = await this.findOne(id);
    if (rec === undefined) {
      throw new NotFoundException();
    }
    const discount = new Discount();
    discount.name = UpdateDiscountDto.name;
    discount.discount = UpdateDiscountDto.discount;
    discount.startDay = UpdateDiscountDto.startDay;
    discount.endDay = UpdateDiscountDto.endDay;
    return this.repository.update(id, discount);
  }

  async remove(id: number) {
    const rec = await this.findOne(id);
    if (rec === undefined) {
      throw new NotFoundException();
    }
    return this.repository.delete(id);
  }
}
