import { Test, TestingModule } from '@nestjs/testing';
import { WorkingformController } from './workingform.controller';
import { WorkingformService } from './workingform.service';

describe('WorkingformController', () => {
  let controller: WorkingformController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WorkingformController],
      providers: [WorkingformService],
    }).compile();

    controller = module.get<WorkingformController>(WorkingformController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
