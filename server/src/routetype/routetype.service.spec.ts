import { Test, TestingModule } from '@nestjs/testing';
import { RoutetypeService } from './routetype.service';

describe('RoutetypeService', () => {
  let service: RoutetypeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RoutetypeService],
    }).compile();

    service = module.get<RoutetypeService>(RoutetypeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
