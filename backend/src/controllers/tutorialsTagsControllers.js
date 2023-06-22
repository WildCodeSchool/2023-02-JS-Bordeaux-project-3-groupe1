const TutorialsTagsManager = require("../models/TutorialsTagsManager");

const getTutorialTag = async (req, res) => {
  try {
    const { id } = req.params;
    const tutorialTag = await TutorialsTagsManager.getTutorialTagsById(id);
    if (tutorialTag.length === 0) {
      res.status(404).send("No tutorials by Tags found");
    } else {
      res.status(200).send(tutorialTag);
    }
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports = { getTutorialTag };
