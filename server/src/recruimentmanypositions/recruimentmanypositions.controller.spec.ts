import { Test, TestingModule } from '@nestjs/testing';
import { RecruimentmanypositionsController } from './recruimentmanypositions.controller';
import { RecruimentmanypositionsService } from './recruimentmanypositions.service';

describe('RecruimentmanypositionsController', () => {
  let controller: RecruimentmanypositionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RecruimentmanypositionsController],
      providers: [RecruimentmanypositionsService],
    }).compile();

    controller = module.get<RecruimentmanypositionsController>(RecruimentmanypositionsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
