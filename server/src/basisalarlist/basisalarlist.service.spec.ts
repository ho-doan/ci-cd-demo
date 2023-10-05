import { Test, TestingModule } from '@nestjs/testing';
import { BasisalarlistService } from './basisalarlist.service';

describe('BasisalarlistService', () => {
  let service: BasisalarlistService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BasisalarlistService],
    }).compile();

    service = module.get<BasisalarlistService>(BasisalarlistService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
