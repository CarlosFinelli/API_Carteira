import PacotesModel from "../../models/Pacotes/PacotesModel.js";

class PacotesService {
    async findAll() {
        return await PacotesModel.findAll();
    }

    async findById(id) {
        return await PacotesModel.findById(id);
    }

    async create(data) {
        return await PacotesModel.create(data);
    }
    
    async update(id, data) {
        return await PacotesModel.update(id, data);
    }

    async delete(id) {
        return await PacotesModel.delete(id);
    }
};

export default new PacotesService();