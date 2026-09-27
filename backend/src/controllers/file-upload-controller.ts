import type { Request, Response } from "express";
import multer from "multer";



const imageController = {
  async uploadImage(req: Request, res: Response) {
    res.status(200).send("File uploaded successfully");
    console.log(req.file) 
  },
};

export default imageController;
