import { Router } from 'express';
import { productController } from "../api/product.controller";

const productRouter = Router();

productRouter.get('/', productController.getAll);
productRouter.post('/', productController.create);
productRouter.get('/:id', productController.getById);
productRouter.patch('/:id', productController.update);
productRouter.delete('/:id', productController.delete);

module.exports = productRouter
