const path = require("path");
const fs = require("fs");
const { ref, uploadBytes, getDownloadURL } = require("firebase/storage");
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

    try {
      const response = await uploadBytes(fileRef, buffer, {
        contentType: "image/png",
      });

      const downloadURL = await getDownloadURL(response.ref);
      req.body.newFilename = downloadURL;
      next();
    } catch (error) {
      console.error("Error uploading file:", error);
      res.status(500).send("Error uploading file.");
    }
  } else {
    next();
  }
};

module.exports = uploadFirebase;

module.exports = uploadFirebase;
