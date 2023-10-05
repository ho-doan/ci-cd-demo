import { Test, TestingModule } from '@nestjs/testing';
import { StudytimeController } from './studytime.controller';
import { StudytimeService } from './studytime.service';

describe('StudytimeController', () => {
  let controller: StudytimeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StudytimeController],
      providers: [StudytimeService],
    }).compile();

    controller = module.get<StudytimeController>(StudytimeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
