const path = require("path");
const fs = require("fs");
const { ref, uploadBytes } = require("firebase/storage");
const storage = require("../../firebase");

const uploadFirebase = async (req, res, next) => {
  const { file } = req;
  if (file) {
    const fileName = file.originalname;
    const fileExtension = path.extname(fileName);
    const fileNameWithoutExtension = path.basename(fileName, fileExtension);
    const newFileName = `${fileNameWithoutExtension}-${Date.now()}${fileExtension}`;
    const filePath = `images/${newFileName}`;
    const fileRef = ref(storage, filePath);
    const buffer = fs.readFileSync(file.path);

    const response = await uploadBytes(fileRef, buffer, {
      contentType: "image/png",
    });

    if (response) {
      req.body.newFilename = newFileName;
      next();
    } else {
      res.status(500);
    }
  }
};

module.exports = uploadFirebase;
