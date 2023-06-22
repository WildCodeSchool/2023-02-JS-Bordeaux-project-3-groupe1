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

const getImageById = async (req, res) => {
  const imageId = req.params.id;
  const results = await TutorialManager.getByIdTutorial(imageId);
  const resultsWithUrl = results[0].pictureTuto;

  try {
    const filePath = `images/${resultsWithUrl}`;
    const fileRef = ref(storage, filePath);
    const url = await getDownloadURL(fileRef);

    res.status(200).json({
      ...results,
      url,
    });
  } catch (error) {
    res.status(404).json({ error: "Image not found" });
  }
};

module.exports = { getFirebase, getImageById };
