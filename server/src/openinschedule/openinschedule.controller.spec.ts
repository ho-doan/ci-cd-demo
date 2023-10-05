import { Test, TestingModule } from '@nestjs/testing';
import { OpeninscheduleController } from './openinschedule.controller';
import { OpeninscheduleService } from './openinschedule.service';

describe('OpeninscheduleController', () => {
  let controller: OpeninscheduleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OpeninscheduleController],
      providers: [OpeninscheduleService],
    }).compile();

    controller = module.get<OpeninscheduleController>(OpeninscheduleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
