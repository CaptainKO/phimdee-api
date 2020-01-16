import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({ name: 'pd_movies' })

export class Movie extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    rate: number;

    @Column()
    date: Date;

    @Column()
    totalEpisode: number;
}
