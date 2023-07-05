const {
  getTutorialByIconFormation,
  findTurorialByHerID,
} = require("../models/TutorialByIconManager");

const getTutorialsByIdWithJoinTableFormations = async (req, res) => {
  const { id } = req.params;
  try {
    const results = await getTutorialByIconFormation(id);
    if (results.length === 0) {
      res.status(404).send("no formations found");
    } else {
      res.status(200).json(results);
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

const getTutorialByHerIdClick = async (req, res) => {
  const { id } = req.params;
  try {
    const results = await findTurorialByHerID(id);
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
  getTutorialByHerIdClick,
};
