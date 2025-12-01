import { Router } from "express";
import authMiddleware from "../../middlewares/auth.js";
import { roleMiddleWare } from "../../middlewares/RoleMiddleware.js";
import PacotesController from "../../controllers/Pacotes/PacotesController.js";


const PacotesRoutes = Router();

PacotesRoutes.get("/", authMiddleware, PacotesController.findAll);
PacotesRoutes.get("/:id", authMiddleware, PacotesController.findById);
PacotesRoutes.post("/", PacotesController.create);
PacotesRoutes.put("/:id", authMiddleware, PacotesController.update);
PacotesRoutes.delete("/:id", authMiddleware, PacotesController.delete);

export default PacotesRoutes;