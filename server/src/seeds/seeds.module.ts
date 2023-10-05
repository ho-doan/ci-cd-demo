import { Module } from '@nestjs/common';
import { SeedsService } from './seeds.service';
import { SeedsController } from './seeds.controller';
import { UsersModule } from 'src/users/users.module';
import { TrainsModule } from 'src/trains/trains.module';
import { CategoriesModule } from 'src/categories/categories.module';
import { ProductsModule } from 'src/products/products.module';

@Module({
  imports: [UsersModule, TrainsModule, CategoriesModule, ProductsModule],
  controllers: [SeedsController],
  providers: [SeedsService],
})
export class SeedsModule {}
