const database = require("../../database");
const QuizzManager = require("./QuizzManager");

const getAllTutorials = async () => {
  try {
    const tutorials = await database.query("SELECT * FROM tutorials");
    return tutorials[0];
  } catch (error) {
    throw new Error("Error retrieving tutorials");
  }
};

const getByIdTutorial = async (id) => {
  try {
    const tutorial = await database.query(
      "SELECT * FROM tutorials WHERE id = ?",
      [id]
    );
    return tutorial[0];
  } catch (error) {
    throw new Error("Error retrieving tutorial");
  }
};

const createTutorialWithImage = async (tutorial, newFilename) => {
  try {
    const {
      question,
      firstProposal,
      secondProposal,
      response,
      formationId,
      level,
      name,
      urlVideo,
      objectif,
      explication,
    } = tutorial;

    const quizzQuery = `INSERT INTO quizz (question, firstProposal, secondProposal, response) VALUES (?, ?, ?, ?)`;
    const valuesQuizz = [question, firstProposal, secondProposal, response];
    const quizzResult = await database.query(quizzQuery, valuesQuizz);
    const quizzId = quizzResult.insertId;

    const tutorialQuery = `INSERT INTO tutorials (formation_id, quizz_id, level, name, urlVideo, pictureTuto, objectif, explication) 
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;

    const valuesTutorial = [
      formationId,
      quizzId,
      level,
      name,
      urlVideo,
      newFilename,
      objectif,
      explication,
    ];

    const tutorialResult = await database.query(tutorialQuery, valuesTutorial);
    const tutorialId = tutorialResult[0].insertId;

    return {
      quizzId,
      tutorialId,
      question,
      firstProposal,
      secondProposal,
      response,
      formationId,
      level,
      name,
      urlVideo,
      newFilename,
      objectif,
      explication,
    };
  } catch (error) {
    throw new Error("Error creating tutorial");
  }
};

const updateTutorial = async (id, tutorial) => {
  try {
    const quizzKeys = Object.keys(tutorial.quizz);
    const quizzValues = Object.values(tutorial.quizz);

    let quizzQuery = "UPDATE quizz SET ";
    const quizzUpdateClauses = quizzKeys.map((key) => `${key} = ?`);
    quizzQuery += quizzUpdateClauses.join(", ");
    quizzQuery += " WHERE id = ?";

    quizzValues.push(id);

    await database.query(quizzQuery, quizzValues);

    const tutorialKeys = Object.keys(tutorial);
    const tutorialValues = Object.values(tutorial);

    let tutorialQuery = "UPDATE tutorials SET ";
    const tutorialUpdateClauses = tutorialKeys
      .filter((key) => key !== "quizz")
      .map((key) => `${key} = ?`);
    tutorialQuery += tutorialUpdateClauses.join(", ");
    tutorialQuery += " WHERE id = ?";

    tutorialValues.push(id);

    await database.query(tutorialQuery, tutorialValues);

    const updatedQuizz = await QuizzManager.getByIdQuizz(id);
    const updatedTutorial = await getByIdTutorial(id);

    return {
      updatedQuizz: updatedQuizz[0],
      updatedTutorial: updatedTutorial[0],
    };
  } catch (error) {
    throw new Error("Error updating tutorial");
  }
};

const deleteTutorialAndQuizz = async (id) => {
  await QuizzManager.deleteQuizzByFormationId(id);
  const quizzQuery = "DELETE FROM tutorials WHERE id = ?";
  try {
    const response = await database.query(quizzQuery, [id]);
    if (response.affectedRows === 0) {
      throw new Error(`Tutorial with ID ${id} not found`);
    }
    return response;
  } catch (error) {
    throw new Error("Error deleting tutorial");
  }
};

module.exports = {
  getAllTutorials,
  getByIdTutorial,
  createTutorialWithImage,
  updateTutorial,
  deleteTutorialAndQuizz,
};
