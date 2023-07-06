const {
  getTutorialByIconFormation,
  findTurorialByHerID,
  updateStepByIdOfTutorial,
  getTutorialByIconFormationNoId,
} = require("../models/TutorialByIconManager");

const getTutorialsByIdWithJoinTableFormationsNoId = async (req, res) => {
  try {
    const results = await getTutorialByIconFormationNoId();
    if (results.length === 0) {
      res.status(404).send("no formations found");
    } else {
      res.status(200).json(results);
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

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

const updateStepOnClick = async (req, res) => {
  const { id } = req.params;
  const { stepToUpdate, updatedValue } = req.body;
  try {
    const results = await updateStepByIdOfTutorial(
      id,
      stepToUpdate,
      updatedValue
    );
    if (results.length === 0) {
      res.status(404).send("no steps found");
      console.info("controller 404");
    } else {
      res.status(200).json(results);
    }
  } catch (error) {
    res.status(500).send(error);
    console.info("erreur 500 controllers");
  }
};

module.exports = {
  getTutorialsByIdWithJoinTableFormations,
  getTutorialByHerIdClick,
  updateStepOnClick,
  getTutorialsByIdWithJoinTableFormationsNoId,
};
