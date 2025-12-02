import { hashPassword } from "../../../util/Bcripty.js";
import UserModel from "../../models/Users/UsersModel.js";


class UserService {
    async findAll() {
        return await UserModel.findAll();
    }

    async findById(id) {
        return await UserModel.findById(id);
    }

    async findByEmail(email) {
        return await UserModel.findByEmail(email);
    }

    async findOrCreateOAuth(data) {
        let user = await UserModel.findByEmail(data.email);

        if (!user) {
            user = await UserModel.create({
                nome: data.nome,
                email: data.email,
                senha: null,     
                tipo: "usuario" 
            });
        } else {
            throw new Error("Usuário já cadastrado no sistema!");
        }

        return user;
    }

    async create(data) {
        return await UserModel.create(data);
    }
    
    async update(id, data) {
        if(data.senha) {
            const hashed = await hashPassword(senha)
            data.senha = hashed;
        }
        return await UserModel.update(id, data);
    }

    async delete(id) {
        return await UserModel.delete(id);
    }
};

export default new UserService();