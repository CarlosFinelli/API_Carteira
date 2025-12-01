import CarteiraModel from "../../models/Carteira/CarteiraModel.js";

class CarteiraService {
    async findAll() {
        return await CarteiraModel.findAll();
    }

    async findById(id) {
        return await CarteiraModel.findById(id);
    }

    async findByUser(userId) {
        return await CarteiraModel.findByUser(userId);
    }

    async create(data) {
        return await CarteiraModel.create(data);
    }
    
    async update(id, data) {
        return await CarteiraModel.update(id, data);
    }

    async delete(id) {
        return await CarteiraModel.delete(id);
    }
};

export default new CarteiraService();