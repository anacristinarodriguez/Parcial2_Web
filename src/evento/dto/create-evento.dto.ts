import { IsDate, IsNumber, IsString, IsEnum } from 'class-validator';
import { Estado } from '../entities/evento.entity';

export class CreateEventoDto {
  @IsString()
  titulo: string;

  @IsString()
  descripcion: string;

  @IsDate()
  fecha: Date;

  @IsNumber()
  duracion: number;

  @IsEnum(Estado)
  estado: Estado;
}
