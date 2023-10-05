import { Test, TestingModule } from '@nestjs/testing';
import { BasisalarlistController } from './basisalarlist.controller';
import { BasisalarlistService } from './basisalarlist.service';

describe('BasisalarlistController', () => {
  let controller: BasisalarlistController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BasisalarlistController],
      providers: [BasisalarlistService],
    }).compile();

    controller = module.get<BasisalarlistController>(BasisalarlistController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
