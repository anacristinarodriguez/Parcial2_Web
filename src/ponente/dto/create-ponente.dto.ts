import { IsNumber, IsString, IsEnum } from 'class-validator';
import { TipoPonente } from '../entities/ponente.entity';

export class CreatePonenteDto {
  @IsNumber()
  cedula: number;

  @IsString()
  nombre: string;

  @IsString()
  email: string;

  @IsEnum(TipoPonente)
  tipoPonente: TipoPonente;

  @IsString()
  especialidad: string;
}
