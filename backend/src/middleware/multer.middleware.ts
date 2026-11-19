import multer from "multer";

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
  fileFilter(req, file, callback) {
    if(file.mimetype.startsWith("image/")){
      callback(null , true)
    }else{
      callback(new Error("only allowed images"))
    }
  },

});