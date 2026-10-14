import cloudinary from "../config/cloudinary-config.js";
export const uploadToCloudinary = (buffer: Buffer): Promise<any> => {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      {
        folder: "image-processing/original",
        resource_type: "image",
      },
      (error, result) => {
        if (error) {
          return reject(error);
        }
        if (!result) {
          return reject(new Error("cloudinary upload failed"));
        }
        resolve(result);
      },
    );
 stream.end(buffer)
  });
};
