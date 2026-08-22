import bcrypt from "bcryptjs";
import type { LoginBody } from "../types/user.ts";
import type { Request, Response } from "express";
import User from "../models/user-model.js";
import jwt from "jsonwebtoken";
import { json } from "node:stream/consumers";
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
    // creating accessToken jwt token
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
  // creating login functions
  async login(req: Request, res: Response) {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "user not found!" });
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch)
      return res.status(401).json({ message: "invalid password" });
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET!, {
      expiresIn: "24h",
    });
    // adding httpOnly cookie
    res.cookie("accessToken", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 24 * 60 * 60 * 1000,
    });

    return res.status(200).json({ message: "Login Successful", user });
  },
  logout(req: Request, res: Response) {
    res.clearCookie("accessToken" , {
      httpOnly: true ,
      secure : process.env.NODE_ENV === "production",
      sameSite :"lax"
    })

  return res.status(200).json({message : "logout_successfull"})
  },
};
export default userController;
