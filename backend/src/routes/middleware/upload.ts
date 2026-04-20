import multer from "multer"
import path from "path"

const storage = multer.diskStorage({
  destination: "public/uploads",
  filename: (req, file, cb) => {
    const unique = Date.now() + "-" + Math.round(Math.random() * 1e9)
    // cb is used to specify the filename for the uploaded file
    // if filename failed, it will return an error to the client
    // i set null , so it will not return an error and continue to save the file
    cb(null, unique + path.extname(file.originalname))
  }
})

export const upload = multer({ storage })