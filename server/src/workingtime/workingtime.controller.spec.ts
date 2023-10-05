import { Test, TestingModule } from '@nestjs/testing';
import { WorkingtimeController } from './workingtime.controller';
import { WorkingtimeService } from './workingtime.service';

describe('WorkingtimeController', () => {
  let controller: WorkingtimeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WorkingtimeController],
      providers: [WorkingtimeService],
    }).compile();

    controller = module.get<WorkingtimeController>(WorkingtimeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
