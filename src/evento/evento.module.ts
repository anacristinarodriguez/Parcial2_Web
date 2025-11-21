import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Evento } from './entities/evento.entity';
import { Ponente } from 'src/ponente/entities/ponente.entity';
import { EventoService } from './evento.service';
import { EventoController } from './evento.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Evento, Ponente])],
  providers: [EventoService],
  controllers: [EventoController],
  exports: [TypeOrmModule],
})
export class EventoModule {}
