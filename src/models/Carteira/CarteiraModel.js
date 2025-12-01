import connection from "../../config/db.js";
import { TableNames } from "../../../util/TableNames.js";
const tableName = TableNames.Carteira;

class CarteiraModel {
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

    async findByUser(id) {
        try {
            const [rows] = await connection.query(`SELECT * FROM ${tableName} WHERE fk_idUser = ?`, [id]);

            return rows[0] || null;
        } catch(error) {
            console.log(`Erro ao recuperar a carteira do usuário: ${error.message}`);
            throw new Error("Erro ao buscar carteira por usuário");
        }
    }

    async create(data) {
        try {
            const query = `INSERT INTO ${tableName} (saldoDinheiro, saldoMilhas) VALUES (?, ?)`
            const values = [data.saldoDinheiro, data.saldoMilhas, id];

            const [result] = await connection.query(query, values);

            return { id: result.insertId, ...data };
        } catch(error) {
            console.error(`Erro ao criar usuário: ${error.message}`);
            throw new Error("Erro ao criar usuário");
        }
    }

    async update(id, data) {
        try {
            const allowedFields = ["saldoDinheiro", "saldoMilhas"];
            const keys = Object.keys(data).filter(key => allowedFields.includes(key));
            // const query = `UPDATE ${tableName} SET saldoDinheiro = ?, saldoMilhas = ? WHERE id = ?`;

            // const values = [data.saldoDinheiro, data.saldoMilhas, id];

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

            const [result] = await connection.query(query, values);

            return { message: "Carteira atualizada com sucesso!", updatedFields: keys};
        } catch(error) {
            console.error(`Erro ao atualizar carteira: ${error.message}`);
            throw new Error("Erro ao atualizar carteira!");
        }
    }

    async delete(id) {
        try {
            const [result] = await connection.query(
                `DELETE FROM ${tableName} WHERE id = ?`,
                [id]
            );

            if (result.affectedRows == 0) {
                console.error(`Erro ao deletar carteira de id ${i}`, error.message);
                throw new Error("Erro ao deletar carteira");
            }
            return `Sucesso ao deletar carteira do usuário!`
        } catch (error) {
            console.error("Erro ao deletar carteira de usuário!:", error.message);
            throw new Error("Erro ao deletar carteira de usuário");
        }
    }
}

export default new CarteiraModel();