import { Router } from "express";
import imageController, {
  upload,
} from "../controllers/file-upload-controller.js";
const imageRouter = Router();

imageRouter.post(
  "/submit",
  upload.single("mainImage"),
  imageController.uploadImage,
);
