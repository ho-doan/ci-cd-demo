import { Test, TestingModule } from '@nestjs/testing';
import { WageController } from './wage.controller';
import { WageService } from './wage.service';

describe('WageController', () => {
  let controller: WageController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WageController],
      providers: [WageService],
    }).compile();

    controller = module.get<WageController>(WageController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
