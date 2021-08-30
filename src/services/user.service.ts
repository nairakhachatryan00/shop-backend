import { v4 as uuidv4 } from 'uuid'
import { User } from "../entity/User";
import { connection } from "../connection";


class UserService {

    async create(user: User){
        let newUser = new User();
        newUser.id =  uuidv4();
        newUser.firstname =  user.firstname;
        newUser.lastname =  user.lastname;
        newUser.email =  user.email;
        newUser.address =  user.address;
        const data = await connection.manager.save(newUser);
        return data;
    }

    async getAll(){
        const users = await connection.manager.find(User, {where: { relations: ['parent', 'customer', 'product']}});
        return users;
    }

    async getById(id: string){
        const user = await connection.manager.findOne(User, {where: {id: id, relations: ['parent', 'customer', 'product']}});
        return user;
    }

    async update(id: string, body: any) {
        let user = await connection.manager.findOne(User, {where: {id: id, relations: ['parent', 'customer', 'product']}});
        user = Object.assign(user, body);
        const data = await connection.manager.save(user);
        return data;
    }

    async delete(id: string) {
        let user = await connection.manager.findOne(User, id);
        await connection.manager.remove(user);
        return true;
    }
}

export const userService = new UserService();
