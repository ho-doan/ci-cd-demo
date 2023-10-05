import { Test, TestingModule } from '@nestjs/testing';
import { RegisterforstudyController } from './registerforstudy.controller';
import { RegisterforstudyService } from './registerforstudy.service';

describe('RegisterforstudyController', () => {
  let controller: RegisterforstudyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RegisterforstudyController],
      providers: [RegisterforstudyService],
    }).compile();

    controller = module.get<RegisterforstudyController>(RegisterforstudyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
