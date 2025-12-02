import { Router } from "express";
import authMiddleware from "../../middlewares/auth.js";
import { roleMiddleWare } from "../../middlewares/RoleMiddleware.js";
import ExtratosCarteiraController from "../../controllers/ExtratosCarteira/ExtratosCarteiraController.js";


const ExtratoCarteiraRoutes = Router();

ExtratoCarteiraRoutes.get("/", authMiddleware, ExtratosCarteiraController.findAll);
ExtratoCarteiraRoutes.get("/carteira/:id", authMiddleware, ExtratosCarteiraController.findByCarteira);
ExtratoCarteiraRoutes.get("/:id", authMiddleware, ExtratosCarteiraController.findById);
ExtratoCarteiraRoutes.post("/", ExtratosCarteiraController.create);
ExtratoCarteiraRoutes.put("/:id", authMiddleware, ExtratosCarteiraController.update);
ExtratoCarteiraRoutes.delete("/:id", authMiddleware, ExtratosCarteiraController.delete);

export default ExtratoCarteiraRoutes;