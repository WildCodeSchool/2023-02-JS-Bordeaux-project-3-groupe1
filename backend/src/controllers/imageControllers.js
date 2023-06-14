const path = require("path");
const fs = require("fs");
const { ref, uploadBytes, getDownloadURL } = require("firebase/storage");
const storage = require("../../firebase");
const ImageManager = require("../models/ImageManager");

const uploadFile = async (req, res) => {
  try {
    const { file } = req;

    if (!file) {
      res.status(400).json({ message: "No file uploaded" });
      return;
    }

    const fileName = file.originalname;
    const fileExtension = path.extname(fileName);
    const fileNameWithoutExtension = path.basename(fileName, fileExtension);

    const newFileName = `${fileNameWithoutExtension}-${Date.now()}${fileExtension}`;
    const filePath = `images/${newFileName}`;

    const fileRef = ref(storage, filePath);
    const buffer = fs.readFileSync(file.path);
    const metadata = {
      contentType: "image/png",
    };

    await uploadBytes(fileRef, buffer, metadata);
    console.info(fileName, newFileName);

    await ImageManager.createUpload(newFileName);
  } catch (error) {
    console.error("Error uploading file to Firebase Storage: ", error);
    res.status(500).json({ message: "Failed to upload file" });
  }
};

const getAllFile = async (req, res) => {
  try {
    const results = await ImageManager.getAllImage();
    const resultsWithUrls = await Promise.all(
      results[0]
        .map(async (result) => {
          const filePath = `images/${result.nameFile}`;
          const fileRef = ref(storage, filePath);
          const url = await getDownloadURL(fileRef);
          return {
            ...result,
            url,
          };
        })
        .filter((result) => result.nameFile !== null)
    );
    res.status(200).json(resultsWithUrls);
  } catch (error) {
    console.error("Error fetching URLs from Firebase: ", error);
    res.status(500).json({ message: "Failed to fetch URLs" });
  }
};

module.exports = { uploadFile, getAllFile };
