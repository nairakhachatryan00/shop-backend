import {getConnectionManager} from "typeorm";
import {User} from "./entity/User";
import {Order} from "./entity/Order";
import {Product} from "./entity/Product";


const connectionManager = getConnectionManager();
export const connection = connectionManager.create({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "postgres",
    database: "postgres",
    entities: [User, Order, Product]
});
