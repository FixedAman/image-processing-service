import type {
  Request,
  Response,
  NextFunction,
} from "express";
import jwt from "jsonwebtoken";
export function authenticateJWT(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const token = req.cookies.accessToken;
  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!);
    req.user = decoded!;
    next();
  } catch (error) {
    return res.status(403).json({ message: "Token verification failed" });
  }
}

