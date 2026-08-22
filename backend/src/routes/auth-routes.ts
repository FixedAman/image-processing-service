import { Router } from "express";
import userController from "../controllers/auth-controller.js";
import { authenticateJWT } from "../middleware/verification-middleware.js";
const authRouter = Router();

authRouter.post("/register", userController.register);
authRouter.post("/login", userController.login);
authRouter.post("/logout", authenticateJWT, userController.logout);

export default authRouter;
