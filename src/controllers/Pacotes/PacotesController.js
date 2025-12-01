import PacotesService from "../../services/pacotes/PacotesService.js";

class PacotesController {
    async findAll(req, res) {
        try {
            const pacotes = await PacotesService.findAll();
            return res.status(200).json(pacotes)
        } catch(error) {
            console.log(`Erro ao buscar pacotes: ${error.message}`);
            return res.status(400).json({ message: `Erro ao buscar pacotes: ${error.message}`})
        }
    }

    async findById(req, res) {
        try {
            let {id} = req.params;
            const pacote = await PacotesService.findById(id);
            return res.status(200).json(pacote);
        } catch(error) {
            console.log(`Erro ao buscar carteira: ${error.message}`);
            return res.status(400).json({ message: `Erro ao buscar pacote: ${error.message}`})
        }
    }

    async create(req, res) {
        let {titulo, destino, dataIda, dataVolta, hotel, translado, descricao, precoBaseMoeda, precoBaseMilhas} = req.body;
        let data = {
            titulo: titulo, 
            destino: destino, 
            dataIda: dataIda,
            dataVolta: dataVolta,
            hotel: hotel,
            translado: translado,
            descricao: descricao,
            precoBaseMoeda: precoBaseMoeda,
            precoBaseMilhas: precoBaseMilhas,
        };
        const pacote = await PacotesService.create(data);
        return res.status(201).json(pacote);
    }

    async update(req, res) {
        try {
        const {id} = req.params;
        const {data} = req.body;
        const result = await PacotesService.update(id, data);
        return res.status(200).json(result);
        } catch(error) {
            console.log(`Erro ao buscar carteira: ${error.message}`);
            return res.status(400).json({ message: `Erro ao atualizar pacote: ${error.message}`})
        }
    }

    async delete(req, res) {
        try {
            const {id} = req.params;
            const result = await PacotesService.delete(id);
            return res.status(204).json(result);
        } catch(error) {
            console.log(`Erro ao buscar carteira: ${error.message}`);
            return res.status(400).json({ message: `Erro ao buscar pacote: ${error.message}`})
        }
    }
}

export default new PacotesController();