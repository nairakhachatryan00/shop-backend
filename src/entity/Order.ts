import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, ManyToMany, JoinTable} from 'typeorm';
import { User } from "./User";
import { Product } from "./Product";



@Entity()
export class Order {

    @PrimaryGeneratedColumn()
    id: string | undefined;

    @Column({nullable: true })
    price?: number

    @Column()
    status?: string;

    @ManyToOne(() => Order, order => order.id)
    parent: Order | undefined;

    @ManyToOne(() => User)
    customer: User | undefined;

    @ManyToOne(() => Product)
    product: Product | undefined;

}
