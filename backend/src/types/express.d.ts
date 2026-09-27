import type { JwtPayload } from "jsonwebtoken";
import type { CloudinaryStorage } from "multer-storage-cloudinary";

declare global {
  namespace Express {
    interface Request {
      user?: string | JwtPayload;
    }
  }
}
declare global {
  namespace CloudinaryStorage {
    interface params {
      folder?: string;
    }
  }
}
export {};
