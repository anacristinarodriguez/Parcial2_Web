import { Test, TestingModule } from '@nestjs/testing';
import { PonenteController } from './ponente.controller';
import { PonenteService } from './ponente.service';

describe('PonenteController', () => {
  let controller: PonenteController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PonenteController],
      providers: [PonenteService],
    }).compile();

    controller = module.get<PonenteController>(PonenteController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
