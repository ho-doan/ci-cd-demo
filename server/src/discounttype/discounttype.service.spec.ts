import { Test, TestingModule } from '@nestjs/testing';
import { DiscounttypeService } from './discounttype.service';

describe('DiscounttypeService', () => {
  let service: DiscounttypeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DiscounttypeService],
    }).compile();

    service = module.get<DiscounttypeService>(DiscounttypeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
