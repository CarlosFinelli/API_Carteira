import ExtratosCarteiraService from "../../services/ExtratosCarteira/ExtratosCarteiraService.js";

class ExtratosCarteiraController {
    async findAll(req, res) {
        try {
            const extratos = await ExtratosCarteiraService.findAll();
            return res.status(200).json(extratos)
        } catch(error) {
            console.log(`Erro ao buscar extrato: ${error.message}`);
            return res.status(400).json({ message: `Erro ao buscar extrato: ${error.message}`})
        }
    }

    async findById(req, res) {
        try {
            let {id} = req.params;
            const extrato = await ExtratosCarteiraService.findById(id);
            return res.status(200).json(extrato);
        } catch(error) {
            console.log(`Erro ao buscar extrato: ${error.message}`);
            return res.status(400).json({ message: `Erro ao buscar extrato: ${error.message}`})
        }
    }

    async findByCarteira(req, res) {
        try {
            let {id} = req.params;
            const extratos = await ExtratosCarteiraService.findByCarteira(id);
            return res.status(200).json(extratos)
        } catch(error) {
            console.log(`Erro ao buscar extratos do usuário: ${error.message}`);
            return res.status(400).json({ message: `Erro ao buscar extratos do usuário: ${error.message}`})
        }
    }

    async create(req, res) {
        let data = req.body;
        const extrato = await ExtratosCarteiraService.create(data);
        return res.status(201).json(extrato);
    }

    async update(req, res) {
        try {
        const {id} = req.params;
        const {data} = req.body;
        const result = await ExtratosCarteiraService.update(id, data);
        return res.status(200).json(result);
        } catch(error) {
            console.log(`Erro ao buscar extrato: ${error.message}`);
            return res.status(400).json({ message: `Erro ao atualizar extrato: ${error.message}`})
        }
    }

    async delete(req, res) {
        try {
            const {id} = req.params;
            const result = await ExtratosCarteiraService.delete(id);
            return res.status(204).json(result);
        } catch(error) {
            console.log(`Erro ao buscar extrato: ${error.message}`);
            return res.status(400).json({ message: `Erro ao buscar extrato: ${error.message}`})
        }
    }
}

export default new ExtratosCarteiraController();