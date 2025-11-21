import { Injectable } from '@nestjs/common';
import { CreatePonenteDto } from './dto/create-ponente.dto';
import { UpdatePonenteDto } from './dto/update-ponente.dto';
import { Ponente } from './entities/ponente.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TipoPonente } from './entities/ponente.entity';
import { Evento } from 'src/evento/entities/evento.entity';
import {
  BadRequestException,
  InternalServerErrorException,
} from '@nestjs/common';

@Injectable()
export class PonenteService {
  constructor(
    @InjectRepository(Ponente)
    private readonly keyRepository: Repository<Ponente>,

    @InjectRepository(Evento)
    private readonly eventoRepository: Repository<Evento>,
  ) {}

  async create(data: CreatePonenteDto): Promise<Ponente> {
    // tipo Interno
    if (data.tipoPonente === TipoPonente.INTERNO) {
      if (!data.email.endsWith('.edu')) {
        throw new BadRequestException(
          'Los ponentes internos deben tener un correo que termine en .edu',
        );
      }
    }

    // tipo Invitado
    if (data.tipoPonente === TipoPonente.INVITADO) {
      if (!data.email.includes('@') || !data.email.includes('.')) {
        throw new BadRequestException(
          'Los ponentes invitados deben tener un correo electrónico válido.',
        );
      }
    }

    const ponente = this.keyRepository.create(data);
    return this.keyRepository.save(ponente);
  }

  findAll() {
    return `This action returns all ponente`;
  }

  async findOne(id: number): Promise<Ponente> {
    const ponente = await this.keyRepository.findOne({ where: { id } });

    if (!ponente) {
      throw new BadRequestException(`Ponente con ID ${id} no encontrado`);
    }

    return ponente;
  }

  update(id: number, updatePonenteDto: UpdatePonenteDto) {
    return `This action updates a #${id} ponente`;
  }

  async remove(id: number): Promise<void> {
    const ponente = await this.findOne(id);

    const eventos = await this.eventoRepository.find({
      where: { ponente: { id: ponente.id } },
    });

    if (eventos.length > 0) {
      throw new BadRequestException(
        'No se puede eliminar un ponente que tiene eventos asociados.',
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
