const {
  getTutorialByIconFormation,
} = require("../models/TutorialByIconManager");

const getTutorialsByIdWithJoinTableFormations = async (req, res) => {
  try {
    const results = await getTutorialByIconFormation();
    if (results.length === 0) {
      res.status(404).send("no formations found");
    } else {
      res.status(200).json(results);
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  getTutorialsByIdWithJoinTableFormations,
};
