import { Module } from '@nestjs/common';
import { AuditorioService } from './auditorio.service';
import { AuditorioController } from './auditorio.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Auditorio } from './entities/auditorio.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Auditorio])],
  controllers: [AuditorioController],
  providers: [AuditorioService],
})
export class AuditorioModule {}
