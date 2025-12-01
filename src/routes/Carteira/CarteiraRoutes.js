import { Router } from "express";
import CarteiraController from "../../controllers/Carteira/CarteiraController.js";
import authMiddleware from "../../middlewares/auth.js";
import { roleMiddleWare } from "../../middlewares/RoleMiddleware.js";


const CarteiraRoutes = Router();

CarteiraRoutes.get("/", authMiddleware, CarteiraController.findAll);
CarteiraRoutes.get("/user/:id", authMiddleware, CarteiraController.findByUser);
CarteiraRoutes.get("/:id", authMiddleware, CarteiraController.findById);
CarteiraRoutes.post("/", CarteiraController.create);
CarteiraRoutes.put("/:id", authMiddleware, CarteiraController.update);
CarteiraRoutes.delete("/:id", authMiddleware, CarteiraController.delete);

export default CarteiraRoutes;