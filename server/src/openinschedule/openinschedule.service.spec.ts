import { Test, TestingModule } from '@nestjs/testing';
import { OpeninscheduleService } from './openinschedule.service';

describe('OpeninscheduleService', () => {
  let service: OpeninscheduleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OpeninscheduleService],
    }).compile();

    service = module.get<OpeninscheduleService>(OpeninscheduleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
