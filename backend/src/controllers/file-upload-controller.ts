import type { Request, Response } from "express";
import multer from "multer";

const imageController = {
  async uploadImage(req: Request, res: Response) {
    console.log(req.file);
    res.status(200).json({
      message: "filled uploaded",
      image: req.file,
    });
  },
};

export default imageController;
