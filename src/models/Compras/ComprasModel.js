import connection from "../../config/db.js";
import { TableNames } from "../../../util/TableNames.js";
const tableName = TableNames.Compras;

class ComprasModel {
    async findAll() {
        const [rows] = await connection.query(`SELECT * FROM ${tableName}`);

        return rows;
    }

    async findById(id) {
        try {
            const [rows] = await connection.query(`SELECT * FROM ${tableName} WHERE id = ?`, [id]);
            
            return rows[0] || null;
        } catch(error) {
            console.log(`Erro ao recuperar compra: ${error.message}`);
            throw new Error("Erro ao buscar compra por id");
        }
    }
    
    async findByUser(id) {
        try {
            const [rows] = await connection.query(`SELECT * FROM ${tableName} WHERE fk_idUser = ?`, [id]);

            return rows[0] || null;
        } catch(error) {
            console.log(`Erro ao recuperar o usuário: ${error.message}`);
            throw new Error("Erro ao buscar carteira por usuário");
        }
    }

    async create(data) {
        try {
            const query = `INSERT INTO ${tableName} (valorPagoMoeda, valorPagoMilhas, fk_idUser, fk_idPacote) VALUES (?, ?, ?, ?)`
            const values = [data.valorMoeda, data.valorMilhas, data.fk_idUser, data.fk_idPacote];

            const [result] = await connection.query(query, values);

            return { id: result.insertId, ...data };
        } catch(error) {
            console.error(`Erro ao criar pacote: ${error.message}`);
            throw new Error("Erro ao criar pacote");
        }
    }

    async update(id, data) {
        try {
            const allowedFields = ["valorPagoMoeda", "valorPagoMilhas", "fk_idUser", "fk_idPacote"];
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

            return { message: "Pacote atualizada com sucesso!", updatedFields: keys};
        } catch(error) {
            console.error(`Erro ao atualizar pacote: ${error.message}`);
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
                console.error(`Erro ao deletar compra de id ${i}`, error.message);
                throw new Error("Erro ao deletar compra");
            }
            return `Sucesso ao deletar compra!`
        } catch (error) {
            console.error("Erro ao deletar compra!:", error.message);
            throw new Error("Erro ao deletar compra");
        }
    }
}

export default new ComprasModel();