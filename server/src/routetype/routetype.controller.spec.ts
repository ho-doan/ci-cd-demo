import { Test, TestingModule } from '@nestjs/testing';
import { RoutetypeController } from './routetype.controller';
import { RoutetypeService } from './routetype.service';

describe('RoutetypeController', () => {
  let controller: RoutetypeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RoutetypeController],
      providers: [RoutetypeService],
    }).compile();

    controller = module.get<RoutetypeController>(RoutetypeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
