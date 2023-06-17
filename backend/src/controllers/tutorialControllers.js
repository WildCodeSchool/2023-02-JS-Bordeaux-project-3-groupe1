const { ref, getDownloadURL } = require("firebase/storage");
const TutorialManager = require("../models/TutorialManager");
const storage = require("../../firebase");

const getAll = async (req, res) => {
  try {
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
  } catch (error) {
    console.error("Error retrieving data: ", error);
    res.status(500).json({ message: "Failed to retrieve data" });
  }
};

const getOne = async (req, res) => {
  try {
    const tutorialID = req.params.id;
    const response = await TutorialManager.getByIdTutorial(tutorialID);
    if (response === null || response.length === 0) {
      res.sendStatus(404);
    } else {
      const tutorialId = response[0].id;
      const foundObject = response.find((objet) => objet.id === tutorialId);
      if (foundObject) {
        res.send(foundObject);
      } else {
        res.sendStatus(404);
      }
    }
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};

const update = async (req, res) => {
  try {
    const tutorial = req.body;
    const tutorialId = parseInt(req.params.id, 10);

    const response = await TutorialManager.updateTutorial(tutorialId, tutorial);
    if (response) {
      const updatedTutorial = await TutorialManager.getByIdTutorial(tutorialId);
      res.send(updatedTutorial[0]);
    } else {
      res.sendStatus(404);
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Error updating tutorial");
  }
};

const create = async (req, res) => {
  try {
    const { tutorial, newFileName } = req.body;

    const response = await TutorialManager.createTutorialWithImage(
      tutorial,
      newFileName
    );

    if (response) {
      res.status(201).json(tutorial);
    } else {
      res.status(404);
    }
  } catch (error) {
    console.error("Error creating tutorial or uploading file: ", error);
    res
      .status(500)
      .json({ message: "Failed to create tutorial or upload file" });
  }
};

const destroy = async (req, res) => {
  try {
    const tutorialId = parseInt(req.params.id, 10);
    const response = await TutorialManager.deleteTutorialAndQuizz(tutorialId);
    if (response) {
      res.sendStatus(204);
    } else {
      res.sendStatus(404);
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Error deleting tutorial");
  }
};

module.exports = { getAll, getOne, update, create, destroy };
