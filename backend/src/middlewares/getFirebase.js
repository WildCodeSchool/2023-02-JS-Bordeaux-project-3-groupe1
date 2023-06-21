const { ref, getDownloadURL } = require("firebase/storage");
const storage = require("../../firebase");
const TutorialManager = require("../models/TutorialManager");

const getFirebase = async (req, res, next) => {
  const results = await TutorialManager.getAllTutorials();
  const resultsWithUrls = await Promise.all(
    results.map(async (result) => {
      const filePath = `images/${result.pictureTuto}`;
      const fileRef = ref(storage, filePath);
      const url = await getDownloadURL(fileRef);

      return {
        ...result,
        url,
      };
    })
  );
  res.status(200).json(resultsWithUrls);
  next();
};

module.exports = getFirebase;
