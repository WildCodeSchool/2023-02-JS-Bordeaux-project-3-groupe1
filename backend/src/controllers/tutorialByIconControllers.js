const {
  getTutorialByIconFormation,
  findTurorialByHerID,
  updateStepByIdOfTutorial,
  getTutorialByIconFormationNoId,
} = require("../models/TutorialByIconManager");

const getTutorialsByIdWithJoinTableFormationsNoId = async (req, res) => {
  try {
    const results = await getTutorialByIconFormationNoId(req.params.userId);
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
  try {
    const results = await getTutorialByIconFormation(
      req.params.formationId,
      req.params.userId
    );
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
  try {
    const results = await findTurorialByHerID(req.params.id, req.params.userId);
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
  const { stepToUpdate, updatedValue } = req.body;

  try {
    const results = await updateStepByIdOfTutorial(
      req.params.id,
      req.params.userId,
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
