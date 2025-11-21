import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Evento } from '../../evento/entities/evento.entity';

export enum TipoPonente {
  INTERNO = 'Interno',
  INVITADO = 'Invitado',
}

@Entity()
export class Ponente {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  cedula: number;

  @Column()
  nombre: string;

  @Column()
  email: string;

  @Column({
    type: 'enum',
    enum: TipoPonente,
  })
  tipoPonente: TipoPonente;

  @Column()
  especialidad: string;

  @OneToMany(() => Evento, (evento) => evento.ponente)
  eventos: Evento[];
}
