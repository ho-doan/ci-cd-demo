import { Test, TestingModule } from '@nestjs/testing';
import { TypeoftimeService } from './typeoftime.service';

describe('TypeoftimeService', () => {
  let service: TypeoftimeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TypeoftimeService],
    }).compile();

    service = module.get<TypeoftimeService>(TypeoftimeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
