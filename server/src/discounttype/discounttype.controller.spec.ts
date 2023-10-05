import { Test, TestingModule } from '@nestjs/testing';
import { DiscounttypeController } from './discounttype.controller';
import { DiscounttypeService } from './discounttype.service';

describe('DiscounttypeController', () => {
  let controller: DiscounttypeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DiscounttypeController],
      providers: [DiscounttypeService],
    }).compile();

    controller = module.get<DiscounttypeController>(DiscounttypeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
