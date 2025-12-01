import { hashPassword } from "../../../util/Bcripty.js";
import UserModel from "../../models/Users/UsersModel.js";
import UserService from "../../services/Users/UserService.js";


class UserController {
    async findAll(req, res) {
        try {
            const users = await UserService.findAll();
            return res.status(200).json(users)
        } catch(error) {
            console.log(`Erro ao buscar usuários: ${error.message}`);
            return res.status(400).json({ message: `Erro ao buscar usuários: ${error.message}`})
        }
    }

    async findById(req, res) {
        try {
        let {id} = req.params;
        const user = await UserService.findById(id);
        return res.status(200).json(user);
        } catch(error) {
            console.log(`Erro ao buscar usuário: ${error.message}`);
            return res.status(400).json({ message: `Erro ao buscar usuário: ${error.message}`})
        }
    }

    async create(req, res) {
        let {nome, email, senha, tipo} = req.body;
        let data = {
            nome: nome, 
            email: email, 
            senha: senha, 
            tipo: (tipo && tipo.trim() !== "") ? tipo : "usuario"
        };
        const user = await UserService.create(data);
        return res.status(201).json(user);
    }

    async update(req, res) {
        try {
        const {id} = req.params;
        const data = req.body;
        try {
            const result = await UserService.update(id, data);
            return res.status(200).json(result);
        } catch(error) {
            return res.status(500).json({ error: error.message });
        }
        // const {nome, email, senha, tipo} = req.body;
        // const hashed = senha ? await hashPassword(senha) : undefined;
        // const data = {
        //     nome: nome ? nome : undefined, 
        //     email: email ? email : undefined,
        //     senha: hashed ? hashed : undefined,
        //     tipo: tipo ? tipo : undefined
        // }
        console.log(req.body);
        const result = await UserService.update(id, data);
        return res.status(200).json(result);
        } catch(error) {
            console.log(`Erro ao atualizar usuário: ${error.message}`);
            return res.status(400).json({ message: `Erro ao atualizar usuário: ${error.message}`})
        }
    }

    async delete(req, res) {
        try {
            const {id} = req.params;
            const result = await UserService.delete(id);
            return res.status(204).json(result);
        } catch(error) {
            console.log(`Erro ao buscar usuário: ${error.message}`);
            return res.status(400).json({ message: `Erro ao buscar usuário: ${error.message}`})
        }
    }
}

export default new UserController();