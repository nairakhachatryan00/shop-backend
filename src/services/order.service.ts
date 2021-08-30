import { v4 as uuidv4 } from 'uuid'
import { User } from "../entity/User";
import { Order } from "../entity/Order";
import { connection } from "../connection";
import {Product} from "../entity/Product";


class OrderService {

    async create(body: any, userId: string){
        const user = await connection.manager.findOne(User, userId);
        if(!body.products || !body.products.length || !user) {
            return 'The user and the products fields are required!'
        }
        let order = new Order();
        order.id = uuidv4();
        order.customer = user;
        order.status = 'open';
        const parentOrder = await connection.manager.save(order);

       let products = body.products;
       products.forEach(async (item: {id: string, quantity: number}) => {
           const product = await connection.manager.findOne(Product, item.id);
           if(product) {
               product.price = product.price || 0;
               let order = new Order();
               order.id = uuidv4();
               order.status = 'open';
               order.parent = parentOrder;
               order.product = product;
               order.price = product.price * item.quantity;
               await connection.manager.save(order);
           }
       });
       return parentOrder;
    }

    async getAll(){
        const order = await connection.manager.find(Order);
        return order;
    }

    async getById(id: string){
        const order = await connection.manager.findOne(Order, id);
        return order;
    }

    async update(id: string, body: any) {
        let order = await connection.manager.findOne(Order, id);
        order = Object.assign(order, body);
        const data = await connection.manager.save(order);
        return data;
    }

    async delete(id: string) {
        let order = await connection.manager.findOne(Order, id);
        await connection.manager.remove(order);
        return true;
    }
}

export const orderService = new OrderService();
