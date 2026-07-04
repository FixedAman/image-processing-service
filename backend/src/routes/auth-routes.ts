import { Router } from "express";

const authRouter = Router();
authRouter.get("/", (req, res) => {
  res.send("this is elon");
});


export default authRouter;
