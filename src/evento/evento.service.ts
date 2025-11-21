import { Injectable } from '@nestjs/common';
import { CreateEventoDto } from './dto/create-evento.dto';
import { UpdateEventoDto } from './dto/update-evento.dto';
import { Evento } from './entities/evento.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Ponente } from 'src/ponente/entities/ponente.entity';
import { BadRequestException, NotFoundException } from '@nestjs/common';

@Injectable()
export class EventoService {
  constructor(
    @InjectRepository(Evento)
    private readonly keyRepository: Repository<Evento>,
    @InjectRepository(Ponente)
    private readonly ponenteRepository: Repository<Ponente>,
  ) {}

  async create(createEventoDto: CreateEventoDto): Promise<Evento> {
    const { descripcion, ponenteId, auditorio, duracion } = createEventoDto;

    if (duracion <= 0) {
      throw new BadRequestException('La duración debe ser positiva.');
    }

    const ponente = await this.ponenteRepository.findOne({
      where: { id: ponenteId },
    });
    if (!ponente) {
      throw new NotFoundException(`Ponente con ID ${ponenteId} no existe`);
    }

    if (ponente.tipoPonente === 'Invitado' && descripcion.length < 50) {
      throw new BadRequestException(
        'La descripción debe tener al menos 50 caracteres para ponentes invitados',
      );
    }

    const evento = this.keyRepository.create({
      ...createEventoDto,
      ponente,
      aprobado: false,
    });

    return this.keyRepository.save(evento);
  }

  findAll() {
    return `This action returns all evento`;
  }

  async findOne(id: number): Promise<Evento> {
    const evento = await this.keyRepository.findOne({ where: { id } });

    if (!evento) {
      throw new BadRequestException(`Evento con ID ${id} no encontrado`);
    }

    return evento;
  }

  update(id: number, updateEventoDto: UpdateEventoDto) {
    return `This action updates a #${id} evento`;
  }

  remove(id: number) {
    return `This action removes a #${id} evento`;
  }

  async remove(id: number): Promise<void> {
    const evento = await this.findOne(id);

    if (!evento) {
      throw new NotFoundException(`Evento con ID ${id} no existe`);
    }

    if (evento == 'aprobado') {
      throw new BadRequestException(
        'No se puede eliminar un evento que ya está aprobado.',
      );
    }

    await this.keyRepository.delete(id);
  }

  private handleDBExceptions(error: any) {
    if (error.code === '23505') {
      throw new BadRequestException(error.detail);
    }
    throw new InternalServerErrorException('Unexpected error, check logs ');
  }
}
