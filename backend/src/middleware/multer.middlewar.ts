import multer from "multer";
import type { Request, Response } from "express";
import cloudinary from "../config/cloudinary-config.js";
import { CloudinaryStorage } from "multer-storage-cloudinary";

// storing data in local storage first
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: async (req, file) => {
    return {
      folder: "test-image",
      format: "jpg",
    };
  },
});
export const upload = multer({
  storage,
  limits: {
    fileSize: 3 * 1024 * 1024,
  },
});
