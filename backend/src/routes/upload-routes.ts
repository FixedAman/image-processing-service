import { Router } from "express";
import imageController from "../controllers/file-upload-controller.js";
import { upload } from "../middleware/multer.middleware.js";
const imageRouter = Router();

imageRouter.post(
  "/submit",
  upload.single("mainImage"),
  imageController.uploadImage,
);

export default imageRouter;
