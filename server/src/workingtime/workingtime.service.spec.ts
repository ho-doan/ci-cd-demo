import { Test, TestingModule } from '@nestjs/testing';
import { WorkingtimeService } from './workingtime.service';

describe('WorkingtimeService', () => {
  let service: WorkingtimeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WorkingtimeService],
    }).compile();

    service = module.get<WorkingtimeService>(WorkingtimeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
