import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Order } from "./Order";

@Entity('users')
export class User {
    @PrimaryGeneratedColumn("uuid", {})
    id!: string | undefined;

    @Column()
    email!: string;

    @Column({nullable: true })
    firstname?: string;

    @Column({nullable: true })
    lastname?: string;

    @Column()
    address!: string;

}

export default User
