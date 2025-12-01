import connection from "../../config/db.js";
import { TableNames } from "../../../util/TableNames.js";
const tableName = TableNames.Pacotes;

class PacotesModel {
    async findAll() {
        const [rows] = await connection.query(`SELECT * FROM ${tableName}`);

        return rows;
    }

    async findById(id) {
        try {
            const [rows] = await connection.query(`SELECT * FROM ${tableName} WHERE id = ?`, [id]);
            
            return rows[0] || null;
        } catch(error) {
            console.log(`Erro ao recuperar pacote: ${error.message}`);
            throw new Error("Erro ao buscar pacote por id");
        }
    }

    async create(data) {
        try {
            const query = `INSERT INTO ${tableName} (titulo, destino, dataIda, dataVolta, hotel, translado, descricao, precoBaseMoeda, precoBaseMilhas) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`
            const values = [data.titulo, data.destino, data.dataIda, data.dataVolta, data.hotel, data.translado, data.descricao, data.precoBaseMoeda, data.precoBaseMilhas];

            const [result] = await connection.query(query, values);

            return { id: result.insertId, ...data };
        } catch(error) {
            console.error(`Erro ao criar pacote: ${error.message}`);
            throw new Error("Erro ao criar pacote");
        }
    }

    async update(id, data) {
        try {
            const allowedFields = ["titulo", "destino", "dataIda", "dataVolta", "hotel", "translado", "descricao", "precoBaseMoeda", "precoBaseMilhas"];
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
                console.error(`Erro ao deletar pacote de id ${i}`, error.message);
                throw new Error("Erro ao deletar pacote");
            }
            return `Sucesso ao deletar pacote!`
        } catch (error) {
            console.error("Erro ao deletar pacote!:", error.message);
            throw new Error("Erro ao deletar pacote");
        }
    }
}

export default new PacotesModel();