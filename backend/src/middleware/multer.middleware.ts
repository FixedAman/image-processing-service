import multer from "multer";
import type { Request, Response } from "express";
import cloudinary from "../config/cloudinary-config.js";
import { CloudinaryStorage } from "multer-storage-cloudinary";

// storing data in cloudinary
// const storage = new CloudinaryStorage({
//   cloudinary: cloudinary,
//   params: async (req, file) => {
//     return {
//       folder: "image-processing/original",
//       format: "png",
//     };
//   },
// });
export const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 2 * 1024 * 1024,
    files : 1
  },
});
