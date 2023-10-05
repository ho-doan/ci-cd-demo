import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreatePriceDto } from './dto/create-price.dto';
import { UpdatePriceDto } from './dto/update-price.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Price } from './entities/price.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PriceService {
  constructor(
    @InjectRepository(Price)
    private repository: Repository<Price>,
  ) {}
  async create(CreatePriceDto: CreatePriceDto) {
    try {
      return await this.repository.save({
        price: CreatePriceDto.price,
        discount:{
          id: CreatePriceDto.discount
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

  async update(id: number, UpdatePriceDto: UpdatePriceDto) {
    console.log('discount', UpdatePriceDto.discount);
    const rec = await this.findOne(id);
    if (rec === undefined) {
      throw new NotFoundException();
    }
    const price = new Price();
    price.price = UpdatePriceDto.price;
    return this.repository.update(id, price);
  }

  async remove(id: number) {
    const rec = await this.findOne(id);
    if (rec === undefined) {
      throw new NotFoundException();
    }
    return this.repository.delete(id);
  }
}
