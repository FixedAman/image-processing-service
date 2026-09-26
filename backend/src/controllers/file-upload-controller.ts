import type { Request, Response } from "express";
import multer from "multer";
// storing data in local storage first
const storage = multer.diskStorage({
  destination: (req: Request, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req: Request, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});
 export const upload = multer({ storage });
const imageController = {
  async uploadImage(req: Request, res: Response) {
    res.status(200).send("File uploaded successfully");
    console.log(req.file) 
  },
};

export default imageController;
