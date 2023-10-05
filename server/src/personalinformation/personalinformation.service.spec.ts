import { Test, TestingModule } from '@nestjs/testing';
import { PersonalinformationService } from './personalinformation.service';

describe('PersonalinformationService', () => {
  let service: PersonalinformationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PersonalinformationService],
    }).compile();

    service = module.get<PersonalinformationService>(PersonalinformationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
