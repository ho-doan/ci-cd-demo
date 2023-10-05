import { Controller, Get } from '@nestjs/common';
import { SeedsService } from './seeds.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('seeds')
@Controller('seeds')
export class SeedsController {
  constructor(private readonly seedsService: SeedsService) {}

  @Get('users')
  users() {
    return this.seedsService.seedUsers();
  }

  @Get('trains')
  trains() {
    return this.seedsService.seedTrains();
  }

  @Get('categories')
  categories() {
    return this.seedsService.seedCategories();
  }

  @Get('products')
  products() {
    return this.seedsService.seedProducts();
  }
}
