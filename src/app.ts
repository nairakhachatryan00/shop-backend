import express, { Express } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
const orderRoute = require('./routes/order.route');
const productsRoute = require('./routes/product.route');
const usersRoute = require('./routes/user.route');
dotenv.config();
export const getApp = (): Express => {
    const app = express();
    app.disable('x-powered-by')
    app.use(bodyParser.urlencoded({ extended: false }))
    app.use(bodyParser.json())

    app.use(cors());

    app.use('/orders', orderRoute);
    app.use('/products', productsRoute);
    app.use('/users', usersRoute);

    return app;
}
