import { v4 as uuidv4 } from 'uuid'
import { Product } from "../entity/Product";
import { connection } from "../connection";


class ProductService {

    async create(product: Product){
        let newProduct = new Product();
        newProduct.id =  uuidv4();
        newProduct.name =  product.name;
        newProduct.price =  product.price;
        newProduct.unit_measurement =  product.unit_measurement;
        newProduct.description =  product.description;
        const data = await connection.manager.save(newProduct);
        return data;
    }

    async getAll(){
        const products = await connection.manager.find(Product);
        return products;
    }

    async getById(id: string){
        const product = await connection.manager.findOne(Product, id);
        return product;
    }

    async update(id: string, body: any) {
        let product = await connection.manager.findOne(Product, id);
        product = Object.assign(product, body);
        const data = await connection.manager.save(product);
        return data;
    }

    async delete(id: string) {
        let product = await connection.manager.findOne(Product, id);
        await connection.manager.remove(product);
        return true;
    }
}

export const productService = new ProductService();
