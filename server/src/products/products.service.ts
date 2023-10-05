import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private repository: Repository<Product>,
  ) {}
  async create(dto: CreateProductDto) {
    try {
      return this.repository.save({
        // fullName: dto.fullName,
        // description: dto.description,
        // category: {
        //   id: dto.category,
        // },
      });
    } catch (error) {
      return new InternalServerErrorException();
    }
  }

  findAll() {
    return this.repository.find();
  }

  findOne(id: number) {
    return this.repository.findOneBy({
      id,
    });
  }

  update(id: number, dto: UpdateProductDto) {
    console.log('cate id', dto.category);
    return this.repository.update(id, {
      // fullName: dto.fullName,
      // category: {
      //   id: dto.category,
      // },
    });
  }

  remove(id: number) {
    return this.repository.delete(id);
  }
}
