import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, ManyToMany, JoinTable } from 'typeorm';

@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    id: string | undefined;

    @Column()
    price!: number;

    @Column()
    unit_measurement!: string;

    @Column()
    name!: string;

    @Column()
    description?: string;
}
