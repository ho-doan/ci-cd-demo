import { Test, TestingModule } from '@nestjs/testing';
import { WorkingformService } from './workingform.service';

describe('WorkingformService', () => {
  let service: WorkingformService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WorkingformService],
    }).compile();

    service = module.get<WorkingformService>(WorkingformService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
