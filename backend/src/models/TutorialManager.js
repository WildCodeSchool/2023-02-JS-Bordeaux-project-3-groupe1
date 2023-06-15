const database = require("../../database");

const getAllTutorials = async () => {
  try {
    const tutorials = await database.query("SELECT * FROM tutorials");
    return tutorials;
  } catch (error) {
    console.error(error);
    throw new Error("Error retrieving tutorials");
  }
};

const getByIdTutorial = async (tutorialId) => {
  try {
    const tutorial = await database.query(
      "SELECT * FROM tutorials WHERE id = ?",
      [tutorialId]
    );
    return tutorial[0];
  } catch (error) {
    console.error(error);
    throw new Error("Error retrieving tutorial");
  }
};

const createTutorialWithImage = async (tutorial, newFileName) => {
  try {
    const [quizResult] = await database.query(
      `INSERT INTO quizz (question, firstProposal, secondProposal, response) VALUES (?, ?, ?, ?)`,
      [
        tutorial.question,
        tutorial.firstProposal,
        tutorial.secondProposal,
        tutorial.response,
      ]
    );
    const quizzId = quizResult.insertId;

    const result = await database.query(
      `INSERT INTO tutorials (formation_id, quizz_id, level, name, urlVideo, pictureTuto, objectif, explication, pictureExplication) 
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        tutorial.formation_id,
        quizzId,
        tutorial.level,
        tutorial.name,
        tutorial.urlVideo,
        newFileName,
        tutorial.objectif,
        tutorial.explication,
        tutorial.pictureExplication,
      ]
    );
    return result;
  } catch (error) {
    console.error(error);
    throw new Error("Error inserting tutorial");
  }
};

const updateTutorial = async (tutorialId, tutorial) => {
  try {
    await database.query(
      `UPDATE quizz SET question = ?, firstProposal = ?, secondProposal = ?, response = ? WHERE id = ?`,
      [
        tutorial.question,
        tutorial.firstProposal,
        tutorial.secondProposal,
        tutorial.response,
        tutorialId,
      ]
    );

    const result = await database.query(
      `UPDATE tutorials SET formation_id = ?, quizz_id = ?, level = ?, name = ?, urlVideo = ?, pictureTuto = ?, objectif = ?, explication = ?, pictureExplication = ? WHERE id = ?`,
      [
        tutorial.formation_id,
        tutorialId,
        tutorial.level,
        tutorial.name,
        tutorial.urlVideo,
        tutorial.pictureTuto,
        tutorial.objectif,
        tutorial.explication,
        tutorial.pictureExplication,
        tutorialId,
      ]
    );

    if (result.affectedRows === 0) {
      throw new Error("Tutorial not found");
    }

    return result;
  } catch (error) {
    console.error(error);
    throw new Error("Error updating tutorial");
  }
};

const deleteTutorialAndQuizz = async (id) => {
  try {
    let result;
    // Récupérer l'ID du quizz correspondant au tutoriel
    const quizzIdResult = await database.query(
      `SELECT quizz.id FROM quizz WHERE id = ?`,
      [id]
    );
    if (quizzIdResult && quizzIdResult.length > 0) {
      const quizzId = quizzIdResult[0].id;

      // Supprimer le tutoriel de la table tutorials
      result = await database.query(`DELETE FROM tutorials WHERE id = ?`, [id]);
      // Supprimer l'entrée correspondante dans la table quizz
      result += await database.query(`DELETE FROM quizz WHERE id = ?`, [
        quizzId,
      ]);
    }

    return result;
  } catch (error) {
    console.error(error);
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
