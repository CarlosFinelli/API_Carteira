import ComprasModel from "../../models/Compras/ComprasModel.js";

class ComprasService {
    async findAll() {
        return await ComprasModel.findAll();
    }

    async findById(id) {
        return await ComprasModel.findById(id);
    }

    async findByUser(userId) {
        return await ComprasModel.findByUser(userId);
    }

    async create(data) {
        return await ComprasModel.create(data);
    }
    
    async update(id, data) {
        return await ComprasModel.update(id, data);
    }

    async delete(id) {
        return await ComprasModel.delete(id);
    }
};

export default new ComprasService();