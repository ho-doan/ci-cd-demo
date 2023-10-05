import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from './entities/category.entity';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Category)
    private repository: Repository<Category>,
  ) {}
  create(dto: CreateCategoryDto) {
    return this.repository.save({
      fullName: dto.fullName,
    });
  }

  async findAll() {
    return await this.repository.find();
  }

  findOne(id: number) {
    return this.repository.findOneBy({ id });
  }

  update(id: number, dto: UpdateCategoryDto) {
    return this.repository.update(id, {
      fullName: dto.fullName,
    });
  }

  remove(id: number) {
    return this.repository.delete(id);
  }
}
