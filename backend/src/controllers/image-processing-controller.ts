import sharp from "sharp"

const imageProcessingController = {
 async imageResize (req :Request ,res : Response) {
     sharp(req.file!.buffer)
 }

}

export default imageProcessingController