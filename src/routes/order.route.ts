import { Router } from 'express';
import { orderController } from "../api/order.controller";

const orderRoute = Router();

orderRoute.get('/', orderController.getAll);
orderRoute.post('/', orderController.create);
orderRoute.get('/:id', orderController.getById);
orderRoute.patch('/:id', orderController.update);
orderRoute.delete('/:id', orderController.delete);

module.exports = orderRoute
