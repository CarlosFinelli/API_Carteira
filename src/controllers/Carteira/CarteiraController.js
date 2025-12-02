import CarteiraService from "../../services/carteira/CarteiraService.js";

class CarteiraController {
    async findAll(req, res) {
        try {
            const carteiras = await CarteiraService.findAll();
            return res.status(200).json(carteiras)
        } catch(error) {
            console.log(`Erro ao buscar carteiras: ${error.message}`);
            return res.status(400).json({ message: `Erro ao buscar carteiras: ${error.message}`})
        }
    }

    async findById(req, res) {
        try {
            let {id} = req.params;
            const carteira = await CarteiraService.findById(id);
            return res.status(200).json(carteira);
        } catch(error) {
            console.log(`Erro ao buscar carteira: ${error.message}`);
            return res.status(400).json({ message: `Erro ao buscar carteira: ${error.message}`})
        }
    }

    async findByUser(req, res) {
        try {
            let {id} = req.params;
            const carteira = await CarteiraService.findByUser(id);
            return res.status(200).json(carteira);
        } catch(error) {
            console.log(`Erro ao buscar carteira: ${error.message}`);
            return res.status(400).json({ message: `Erro ao buscar carteira: ${error.message}`})
        }
    }

    async create(req, res) {
        let {saldoDinheiro, saldoMilhas, fk_userId} = req.body;
        let data = {
            saldoDinheiro: saldoDinheiro ?? 0, 
            saldoMilhas: saldoMilhas ?? 0, 
            fk_userId: fk_userId
        };
        const user = await CarteiraService.create(data);
        return res.status(201).json(user);
    }

    async update(req, res) {
        try {
            console.log(JSON.stringify(req.body));
            const {id} = req.params;
            const {valorMoeda, valorMilhas, fk_idPacote} = req.body;
            const data = {
                saldoDinheiro: valorMoeda,
                saldoMilhas: valorMilhas,
                fk_idPacote: fk_idPacote
            }
            console.log(`Controller data: ${data}`)
            const result = await CarteiraService.update(id, data);
            return res.status(200).json(result);
        } catch(error) {
            console.log(`Erro ao buscar carteira: ${error.message}`);
            return res.status(400).json({ message: `Erro ao atualizar carteira: ${error.message}`})
        }
    }

    async delete(req, res) {
        try {
            const {id} = req.params;
            const result = await CarteiraService.delete(id);
            return res.status(204).json(result);
        } catch(error) {
            console.log(`Erro ao buscar carteira: ${error.message}`);
            return res.status(400).json({ message: `Erro ao buscar carteira: ${error.message}`})
        }
    }
}

export default new CarteiraController();