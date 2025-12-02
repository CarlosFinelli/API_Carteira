import { Router } from 'express';
import UserRoutes from './Users/UserRoutes.js';
import AuthRoutes from './Auth/AuthRoutes.js';
import CarteiraRoutes from './Carteira/CarteiraRoutes.js';
import PacotesRoutes from './Pacotes/PacotesRoutes.js';
import ComprasRoutes from './Compras/ComprasRoutes.js';
import ExtratoCarteiraRoutes from './ExtratoCarteira/ExtratoCarteiraRoutes.js';

const router = Router();
router.use("/auth", AuthRoutes);
router.use("/users", UserRoutes);
router.use("/carteira", CarteiraRoutes);
router.use("/pacotes", PacotesRoutes);
router.use("/compras", ComprasRoutes);
router.use("/extratos", ExtratoCarteiraRoutes);

export default router;