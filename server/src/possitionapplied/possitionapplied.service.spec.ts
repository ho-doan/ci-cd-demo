import { Test, TestingModule } from '@nestjs/testing';
import { PossitionappliedService } from './possitionapplied.service';

describe('PossitionappliedService', () => {
  let service: PossitionappliedService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PossitionappliedService],
    }).compile();

    service = module.get<PossitionappliedService>(PossitionappliedService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
