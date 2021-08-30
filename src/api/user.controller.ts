import { Request, Response } from 'express';
import { orderService } from "../services/order.service";

class UserController {
    async create (req: Request, res: Response, next: any) {
        let order = await orderService.create(req.body, req.params.userId);
        res.send(order);
    };

    async getAll (req: Request, res: Response, next: any) {
        let order = await orderService.getAll();
        res.send(order);
    }

    async getById (req: Request, res: Response, next: any) {
        let id = req.params.id;
        let order = await orderService.getById(id);
        res.send(order);
    }

    async update (req: Request, res: Response, next: any) {
        let id = req.params.id;
        let order = await orderService.update(id, req.body);
        res.send(order);
    }

    async delete (req: Request, res: Response, next: any) {
        let id = req.params.id;
        await orderService.delete(id);
        res.send('The order successfully deleted');
    }
}

export const userController = new UserController();

