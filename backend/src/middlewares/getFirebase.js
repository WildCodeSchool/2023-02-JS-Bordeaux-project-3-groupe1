const { ref, getDownloadURL } = require("firebase/storage");
const storage = require("../../firebase");
const TutorialManager = require("../models/TutorialManager");

const getFirebase = async (req, res, next) => {
  const results = await TutorialManager.getAllTutorials();
  const resultsWithUrls = await Promise.all(
    results[0].map(async (result) => {
      const filePath = `images/${result.pictureTuto}`;
      console.info(filePath);
      const fileRef = ref(storage, filePath);
      const url = await getDownloadURL(fileRef);
      return {
        ...result,
        url,
      };
    })
  );

  res.status(200).json({
    imagesWithUrls: resultsWithUrls,
    tutorials: results[0],
  });
  next();
};

module.exports = getFirebase;
