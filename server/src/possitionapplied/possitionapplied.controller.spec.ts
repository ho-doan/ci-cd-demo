import { Test, TestingModule } from '@nestjs/testing';
import { PossitionappliedController } from './possitionapplied.controller';
import { PossitionappliedService } from './possitionapplied.service';

describe('PossitionappliedController', () => {
  let controller: PossitionappliedController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PossitionappliedController],
      providers: [PossitionappliedService],
    }).compile();

    controller = module.get<PossitionappliedController>(PossitionappliedController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
