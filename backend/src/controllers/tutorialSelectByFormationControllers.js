const TutorialSelectByFormationById = require("../models/TutorialSelectByFormationManager");

const tutorialSelectFormationById = async (req, res) => {
  try {
    const { id } = req.params;
    const tutorialFormationById =
      await TutorialSelectByFormationById.findFormationAndTutorial(id);
    if (tutorialFormationById.length === 0) {
      res.status(404).json({ error: "Tutorial not found" });
    } else {
      res.status(200).json(tutorialFormationById[0]);
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { tutorialSelectFormationById };
