import connection from "../../config/db.js";
import { TableNames } from "../../../util/TableNames.js";
const tableName = TableNames.Usuarios;

class UserModel {
    async findAll() {
        const [rows] = await connection.query(`SELECT * FROM ${tableName}`);

        return rows;
    }

    async findById(id) {
        try {
            const [rows] = await connection.query(`SELECT * FROM ${tableName} WHERE id = ?`, [id]);
            
            return rows[0] || null;
        } catch(error) {
            console.log(`Erro ao recuperar usuário: ${error.message}`);
            throw new Error("Erro ao buscar usuário por id");
        }
    }

    async findByEmail(email) {
        try {
            const [rows] = await connection.query(`SELECT * FROM ${tableName} WHERE email = ?`, [email]);

            return rows[0] || null;
        } catch(error) {
            console.log(`Erro ao recuperar o usuário: ${error.message}`);
            throw new Error("Erro ao buscar usuário por email");
        }
    }

    async create(user) {
        console.log(user);
        try {
            const query = `INSERT INTO ${tableName} (nome, email, senha, tipo) VALUES (?, ?, ?, ?)`
            const values = [user.nome, user.email, user.senha, user.tipo];

            const [result] = await connection.query(query, values);

            return { id: result.insertId, ...user };
        } catch(error) {
            console.error(`Erro ao criar usuário: ${error.message}`);
            throw new Error("Erro ao criar usuário");
        }
    }

    async update(id, data) {
        try {
            const allowedFields = ["nome", "email", "senha", "tipo"];
            const keys = Object.keys(data).filter(key => allowedFields.includes(key));

            if (keys.length === 0) {
                throw new Error("Nenhum campo válido enviado para atualização");
            }

            const setClause = keys.map(key => `${key} = ?`).join(", ");

            const values = keys.map(key => data[key]);

            const query = `
                UPDATE ${tableName}
                SET ${setClause}
                WHERE id = ?
            `;

            values.push(id);

            // const query = `UPDATE ${tableName} SET nome = ?, email = ?, senha = ?, tipo = ? WHERE id = ?`;

            // const values = [data.nome, data.email, data.senha, data.tipo, id];

            const [result] = await connection.query(query, values);

            return { message: "Usuário atualizado com sucesso", updatedFields: keys };
        } catch(error) {
            console.error(`Erro ao atualizar usuário ${data.nome}: ${error.message}`);
            throw new Error("Erro ao atualizar usuário!");
        }
    }

    async delete(id) {
        try {
            const [result] = await connection.query(
                `DELETE FROM ${tableName} WHERE id = ?`,
                [id]
            );

            if (result.affectedRows == 0) {
                console.error(`Erro ao deletar usuário de id ${i}`, error.message);
                throw new Error("Erro ao deletar usuário");
            }
            return `Sucesso ao deletar usuário!`
        } catch (error) {
            console.error("Erro ao deletar usuário:", error.message);
            throw new Error("Erro ao deletar usuário");
        }
    }
}

export default new UserModel();