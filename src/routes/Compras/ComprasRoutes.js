import { Router } from "express";
import authMiddleware from "../../middlewares/auth.js";
import { roleMiddleWare } from "../../middlewares/RoleMiddleware.js";
import ComprasController from "../../controllers/Compras/ComprasController.js";


const ComprasRoutes = Router();

ComprasRoutes.get("/", authMiddleware, ComprasController.findAll);
ComprasRoutes.get("/user/:id", authMiddleware, ComprasController.findByUser);
ComprasRoutes.get("/:id", authMiddleware, ComprasController.findById);
ComprasRoutes.post("/", ComprasController.create);
ComprasRoutes.put("/:id", authMiddleware, ComprasController.update);
ComprasRoutes.delete("/:id", authMiddleware, ComprasController.delete);

export default ComprasRoutes;