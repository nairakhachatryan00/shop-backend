// import { postService } from "../services/post.service";
import { Request, Response } from 'express';
import {userService} from "../services/user.service";

class OrderController {

    async create (req: Request, res: Response, next: any) {
        if(!req.body.email || !req.body.address) {
            res.status(400).json({
                message: 'The email and the address fields are required!'
            })
        }
        let user = await userService.create(req.body);
        res.send(user);
    };

    async getAll (req: Request, res: Response, next: any) {
        let users = await userService.getAll();
        res.send(users);
    }

    async getById (req: Request, res: Response, next: any) {
        let id = req.params.id;
        let user = await userService.getById(id);
        res.send(user);
    }

    async update (req: Request, res: Response, next: any) {
        let id = req.params.id;
        let user = await userService.update(id, req.body);
        res.send(user);
    }

    async delete (req: Request, res: Response, next: any) {
        let id = req.params.id;
        await userService.delete(id);
        res.send('The user successfully deleted');
    }
}

export const orderController = new OrderController();
