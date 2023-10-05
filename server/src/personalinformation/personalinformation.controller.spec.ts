import { Test, TestingModule } from '@nestjs/testing';
import { PersonalinformationController } from './personalinformation.controller';
import { PersonalinformationService } from './personalinformation.service';

describe('PersonalinformationController', () => {
  let controller: PersonalinformationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PersonalinformationController],
      providers: [PersonalinformationService],
    }).compile();

    controller = module.get<PersonalinformationController>(PersonalinformationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
