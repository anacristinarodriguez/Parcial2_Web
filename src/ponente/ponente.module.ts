import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ponente } from './entities/ponente.entity';
import { Evento } from 'src/evento/entities/evento.entity';
import { PonenteService } from './ponente.service';
import { PonenteController } from './ponente.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Ponente, Evento])],
  controllers: [PonenteController],
  providers: [PonenteService],
  exports: [TypeOrmModule],
})
export class PonenteModule {}
