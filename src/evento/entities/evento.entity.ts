import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Ponente } from '../../ponente/entities/ponente.entity';
import { Asistente } from '../../asistente/entities/asistente.entity';
import { Auditorio } from 'src/auditorio/entities/auditorio.entity';

export enum Estado {
  PROPUESTO = 'Propuesto',
  APROBADO = 'Aprobado',
  RECHAZADO = 'Rechazado',
}

@Entity()
export class Evento {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  titulo: string;

  @Column()
  descripcion: string;

  @Column()
  fecha: Date;

  @Column({
    type: 'enum',
    enum: Estado,
  })
  estado: Estado;

  @ManyToOne(() => Ponente, (ponente) => ponente.eventos)
  ponente: Ponente;

  @OneToMany(() => Asistente, (asistente) => asistente.evento)
  asistentes: Asistente[];

  @ManyToOne(() => Auditorio, (auditorio) => auditorio.eventos)
  auditorio: Auditorio;
}
