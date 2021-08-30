import { productService } from "../services/product.service";
import { Request, Response } from 'express';

class ProductController {

    async create (req: Request, res: Response, next: any) {
        if(!req.body.name || !req.body.price) {
            res.status(400).json({
                message: 'The name, the price and unit_measurement fields are required!'
            })
        }
        let product = await productService.create(req.body);
        res.send(product);
    };

    async getAll (req: Request, res: Response, next: any) {
        let products = await productService.getAll();
        res.send(products);
    }

    async getById (req: Request, res: Response, next: any) {
        let id = req.params.id;
        let product = await productService.getById(id);
        res.send(product);
    }

    async update (req: Request, res: Response, next: any) {
        let id = req.params.id;
        let product = await productService.update(id, req.body);
        res.send(product);
    }

    async delete (req: Request, res: Response, next: any) {
        let id = req.params.id;
        await productService.delete(id);
        res.send('The product successfully deleted');
    }
}

export const productController = new ProductController();
