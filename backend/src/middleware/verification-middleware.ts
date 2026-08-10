import type { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
export function authenticateJWT(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const token = req.header("Authorization")?.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  jwt.verify(token, process.env.JWT_SECRET!, (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: "Token verification failed" });
    }
    req.user = decoded!;
    next();
  });
}
