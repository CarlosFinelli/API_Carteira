import { Router } from "express";
import AuthController from "../../controllers/AuthController/AuthController.js";

const AuthRoutes = Router();

AuthRoutes.post("/register", AuthController.register);
AuthRoutes.post("/login", AuthController.login);

export default AuthRoutes;