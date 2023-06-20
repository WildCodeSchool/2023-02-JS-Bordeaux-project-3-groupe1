const TutorialManager = require("../models/TutorialManager");

const getAll = async (req, res) => {
  try {
    const tutorials = await TutorialManager.getAllTutorials();
    if (tutorials.length === 0) {
      res.status(404).send("No tutorials found");
    } else {
      res.status(200).send(tutorials);
    }
  } catch (err) {
    res.status(500).send(err);
  }
};

const getOne = async (req, res) => {
  try {
    const { id } = req.params;
    const tutorialById = await TutorialManager.getByIdTutorial(id);
    if (tutorialById.length === 0) {
      res.status(404).json({ error: "Tutorial not found" });
    } else {
      res.status(200).json(tutorialById[0]);
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const create = async (req, res) => {
  try {
    const tutorial = req.body;
    const tutorialCreated = await TutorialManager.createTutorialWithImage(
      tutorial
    );

    if (tutorialCreated) {
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

const update = async (req, res) => {
  const tutorial = req.body;
  const { id } = req.params;

  try {
    const tutorialUpdated = await TutorialManager.updateTutorial(id, tutorial);
    if (!tutorialUpdated.updatedTutorial) {
      res.status(404).send("Tutorial not updated");
    } else {
      res.sendStatus(204);
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const destroy = async (req, res) => {
  try {
    const { id } = req.params;
    const tutorialDeleted = await TutorialManager.deleteTutorialAndQuizz(id);
    if (tutorialDeleted.affectedRows === 0) {
      res.status(404).send("Tutorial not deleted");
    } else {
      res.sendStatus(204);
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { getAll, getOne, update, create, destroy };
