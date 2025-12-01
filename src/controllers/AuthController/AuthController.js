import UserModel from "../../models/Users/UsersModel.js";
import UserService from "../../services/Users/UserService.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

class AuthController {

    async register(req, res) {
        const { nome, email, senha, tipo} = req.body;

        const exists = await UserService.findByEmail(email);
        if(exists) return res.status(400).json({ error: "Usuário já existe!" });

        const hashed = await bcrypt.hash(senha, 10);

        const data = {
            nome: nome,
            email: email,
            senha: hashed,
            tipo: (tipo && tipo.trim() !== "") ? tipo : "usuario"
        }

        const user = await UserService.create(data);

        return res.status(201).json(user);
    }

    async login(req, res) {
        const { email, senha} = req.body;
        const user = await UserModel.findByEmail(email);
        if (!user) return res.status(404).json({ error: "Usuário não encontrado!"});

        if (!(await bcrypt.compare(senha, user.senha))) {
            return res.status(401).json({ error: "Senha incorreta" });
        }

        const token = jwt.sign(
            {
                id: user.id,
                email: user.email,
                role: user.tipo
            },
            process.env.JWT_SECRET,
            { expiresIn: "1d" }
        );

        return res.json({ user, token });
    }

}

export default new AuthController();