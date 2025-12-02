import ExtratosCarteiraModel from "../../models/ExtratosCarteira/ExtratosCarteiraModel.js";

class ExtratosCarteiraService {
    async findAll() {
        return await ExtratosCarteiraModel.findAll();
    }

    async findById(id) {
        return await ExtratosCarteiraModel.findById(id);
    }

    async findByCarteira(carteiraId) {
        return await ExtratosCarteiraModel.findByCarteira(carteiraId);
    }

    async create(data) {
        return await ExtratosCarteiraModel.create(data);
    }
    
    async update(id, data) {
        return await ExtratosCarteiraModel.update(id, data);
    }

    async delete(id) {
        return await ExtratosCarteiraModel.delete(id);
    }
};

export default new ExtratosCarteiraService();