import { Router } from "express";
import userController from "../controllers/auth-controller.js";
const authRouter = Router();

authRouter.post("/register", userController.register);
authRouter.post("/login", userController.login);

export default authRouter;
