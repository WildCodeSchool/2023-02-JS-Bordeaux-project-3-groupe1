const multer = require("multer");

const MIME_TYPES = {
  "image/jpg": "jpg",
  "image/jpeg": "jpg",
  "image/png": "png",
};
const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "./public/data/uploads/");
  },
  filename: (req, file, callback) => {
    const extension = MIME_TYPES[file.mimetype];
    if (extension) {
      const name = file.originalname.split(" ").join("_");
      callback(null, `${name + Date.now()}.${extension}`);
    } else {
      callback(
        new Error(
          "Invalid file type. Only JPG, JPEG, and PNG files are allowed."
        )
      );
    }
  },
});

module.exports = multer({ storage }).single("file");
