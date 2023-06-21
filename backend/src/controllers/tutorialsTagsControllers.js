const TutorialsTagsManager = require("../models/TutorialsTagsManager");

const getAll = async (req, res) => {
  try {
    const tutorialTag = await TutorialsTagsManager.getAllTutorialsTags();
    if (tutorialTag.length === 0) {
      res.status(404).send("No tutorials by Tags found");
    } else {
      res.status(200).send(tutorialTag);
    }
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports = { getAll };
