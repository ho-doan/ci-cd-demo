import { Test, TestingModule } from '@nestjs/testing';
import { NomineeController } from './nominee.controller';
import { NomineeService } from './nominee.service';

describe('NomineeController', () => {
  let controller: NomineeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NomineeController],
      providers: [NomineeService],
    }).compile();

    controller = module.get<NomineeController>(NomineeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
