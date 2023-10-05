import { Test, TestingModule } from '@nestjs/testing';
import { RegisterforstudyService } from './registerforstudy.service';

describe('RegisterforstudyService', () => {
  let service: RegisterforstudyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RegisterforstudyService],
    }).compile();

    service = module.get<RegisterforstudyService>(RegisterforstudyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
