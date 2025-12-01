import ComprasService from "../../services/compras/ComprasService.js";

class ComprasController {
    async findAll(req, res) {
        try {
            const compras = await ComprasService.findAll();
            return res.status(200).json(compras)
        } catch(error) {
            console.log(`Erro ao buscar compra: ${error.message}`);
            return res.status(400).json({ message: `Erro ao buscar compra: ${error.message}`})
        }
    }

    async findById(req, res) {
        try {
            let {id} = req.params;
            const compra = await ComprasService.findById(id);
            return res.status(200).json(compra);
        } catch(error) {
            console.log(`Erro ao buscar compra: ${error.message}`);
            return res.status(400).json({ message: `Erro ao buscar compra: ${error.message}`})
        }
    }

    async findByUser(req, res) {
        try {
            let {id} = req.params;
            const compras = await ComprasService.findByUser(id);
            return res.status(200).json(compras)
        } catch(error) {
            console.log(`Erro ao buscar compras do usuário: ${error.message}`);
            return res.status(400).json({ message: `Erro ao buscar compras do usuário: ${error.message}`})
        }
    }

    async create(req, res) {
        let data = req.body;
        const compra = await ComprasService.create(data);
        return res.status(201).json(compra);
    }

    async update(req, res) {
        try {
        const {id} = req.params;
        const {data} = req.body;
        const result = await ComprasService.update(id, data);
        return res.status(200).json(result);
        } catch(error) {
            console.log(`Erro ao buscar compra: ${error.message}`);
            return res.status(400).json({ message: `Erro ao atualizar compra: ${error.message}`})
        }
    }

    async delete(req, res) {
        try {
            const {id} = req.params;
            const result = await ComprasService.delete(id);
            return res.status(204).json(result);
        } catch(error) {
            console.log(`Erro ao buscar compra: ${error.message}`);
            return res.status(400).json({ message: `Erro ao buscar compra: ${error.message}`})
        }
    }
}

export default new ComprasController();