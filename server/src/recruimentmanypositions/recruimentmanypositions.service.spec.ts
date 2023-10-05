import { Test, TestingModule } from '@nestjs/testing';
import { RecruimentmanypositionsService } from './recruimentmanypositions.service';

describe('RecruimentmanypositionsService', () => {
  let service: RecruimentmanypositionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RecruimentmanypositionsService],
    }).compile();

    service = module.get<RecruimentmanypositionsService>(RecruimentmanypositionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
