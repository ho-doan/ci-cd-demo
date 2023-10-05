import { Test, TestingModule } from '@nestjs/testing';
import { TypeoftimeController } from './typeoftime.controller';
import { TypeoftimeService } from './typeoftime.service';

describe('TypeoftimeController', () => {
  let controller: TypeoftimeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TypeoftimeController],
      providers: [TypeoftimeService],
    }).compile();

    controller = module.get<TypeoftimeController>(TypeoftimeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
