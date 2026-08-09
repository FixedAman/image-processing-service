import bcrypt from "bcryptjs";
import type { LoginBody } from "../types/user.ts";
import type { Request, Response } from "express";
import User from "../models/user-model.js";
import jwt from "jsonwebtoken";
const userController = {
  async register(req: Request, res: Response) {
    const { email, password } = req.body as LoginBody;
    // hasing the password :
    const hashedPassword = await bcrypt.hash(password, 10);

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).send({ message: "Email user already exist" });
    }
    // insert data in db
    const user = await User.create({ email, password: hashedPassword });
    // creating acessToken jwt token
    const token = jwt.sign(
      {
        userId: user._id,
      },
      process.env.JWT_SECRET!,
      {
        expiresIn: "24h",
      },
    );
    return res.status(201).json({ message: "Registration successfull", token });
  },
  async login(){
    
  }
};
export default userController;
