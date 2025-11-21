/* eslint-disable prettier/prettier */
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Evento } from "src/evento/entities/evento.entity";

@Entity()
export class Auditorio {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;

    @Column()
    capacidad: number;

    @Column()
    ubicacion: string;

    @OneToMany(() => Evento, (evento) => evento.auditorio)
    eventos: Evento[];

}
