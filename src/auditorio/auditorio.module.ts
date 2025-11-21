import { Module } from '@nestjs/common';
import { AuditorioService } from './auditorio.service';
import { AuditorioController } from './auditorio.controller';

@Module({
  controllers: [AuditorioController],
  providers: [AuditorioService],
})
export class AuditorioModule {}
