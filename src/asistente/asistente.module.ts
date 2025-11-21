import { Module } from '@nestjs/common';
import { AsistenteService } from './asistente.service';
import { AsistenteController } from './asistente.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Asistente } from './entities/asistente.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Asistente])],
  controllers: [AsistenteController],
  providers: [AsistenteService],
})
export class AsistenteModule {}
