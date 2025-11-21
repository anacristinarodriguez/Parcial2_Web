import { Test, TestingModule } from '@nestjs/testing';
import { AuditorioController } from './auditorio.controller';
import { AuditorioService } from './auditorio.service';

describe('AuditorioController', () => {
  let controller: AuditorioController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuditorioController],
      providers: [AuditorioService],
    }).compile();

    controller = module.get<AuditorioController>(AuditorioController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
