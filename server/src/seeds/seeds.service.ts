import { Injectable } from '@nestjs/common';
import { faker } from '@faker-js/faker';
import { UsersService } from 'src/users/users.service';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { TrainsService } from 'src/trains/trains.service';
import { CreateTrainDto } from 'src/trains/dto/create-train.dto';
import { CreateCategoryDto } from 'src/categories/dto/create-category.dto';
import { CategoriesService } from 'src/categories/categories.service';
import { CreateProductDto } from 'src/products/dto/create-product.dto';
import { ProductsService } from 'src/products/products.service';

@Injectable()
export class SeedsService {
  constructor(
    private userService: UsersService,
    private trainService: TrainsService,
    private categoryService: CategoriesService,
    private productService: ProductsService,
  ) {}
  async seedUsers() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const models = Array.from({ length: 50 }, (_) => {
      const model = new CreateUserDto();
      model.name = faker.person.fullName();
      return model;
    });
    for await (const user of models) {
      await this.userService.create(user);
    }
    return;
  }
  async seedTrains() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const models = Array.from({ length: 50 }, (_) => {
      const model = new CreateTrainDto();
      model.name = faker.person.fullName();
      model.description = faker.commerce.productDescription();
      model.image = faker.image.avatarGitHub();
      model.outputCommitment = faker.datatype.boolean();
      model.price = Number.parseInt(faker.commerce.price());
      model.time = new Date();
      return model;
    });
    for await (const model of models) {
      await this.trainService.create(model);
    }
    return;
  }
  async seedCategories() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const models = Array.from({ length: 50 }, (_) => {
      const model = new CreateCategoryDto();
      model.fullName = faker.lorem.paragraph(1);
      return model;
    });
    for await (const model of models) {
      await this.categoryService.create(model);
    }
    return;
  }
  async seedProducts() {
    const cates = await this.categoryService.findAll();
    const fakeCate = faker.number.int({
      max: cates[cates.length].id,
      min: cates[0].id,
    });
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const models = Array.from({ length: 50 }, (_) => {
      const model = new CreateProductDto();
      model.fullName = faker.lorem.paragraph(1);
      model.description = faker.lorem.paragraph(1);
      model.category = fakeCate;
      return model;
    });
    for await (const model of models) {
      await this.productService.create(model);
    }
    return;
  }
}
