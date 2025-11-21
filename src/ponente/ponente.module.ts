import { Module } from '@nestjs/common';
import { PonenteService } from './ponente.service';
import { PonenteController } from './ponente.controller';

@Module({
  controllers: [PonenteController],
  providers: [PonenteService],
})
export class PonenteModule {}
