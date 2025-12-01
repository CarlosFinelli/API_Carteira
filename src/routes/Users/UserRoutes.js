import { Router } from "express";
import UserController from "../../controllers/User/UserController.js";
import authMiddleware from "../../middlewares/auth.js";
import { roleMiddleWare } from "../../middlewares/RoleMiddleware.js";


const UserRoutes = Router();

UserRoutes.get("/", authMiddleware, UserController.findAll);
UserRoutes.get("/:id", authMiddleware, UserController.findById);
UserRoutes.post("/", UserController.create);
UserRoutes.put("/:id", authMiddleware, UserController.update);
UserRoutes.delete("/:id", authMiddleware, UserController.delete);

export default UserRoutes;