import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ManyToOne } from 'typeorm/browser';
import { Evento } from '../../evento/entities/evento.entity';

@Entity()
export class Asistente {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  codigoEstudiante: string;

  @Column()
  email: string;

  @ManyToOne(() => Evento, (evento) => evento.asistentes)
  evento: Evento;
}
