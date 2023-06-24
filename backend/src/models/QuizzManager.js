const database = require("../../database");

const getByIdQuizz = async (id) => {
  try {
    const quizz = await database.query("SELECT * FROM quizz WHERE id = ?", [
      id,
    ]);
    return quizz[0];
  } catch (error) {
    console.error(error);
    throw new Error("Error retrieving quizz");
  }
};

const CreateQuizzTutorial = async (tutorial) => {
  const { question, firstProposal, secondProposal, response } = tutorial;

  const quizzQuery = `INSERT INTO quizz (question, firstProposal, secondProposal, response) VALUES (?, ?, ?, ?)`;

  const valuesQuizz = [question, firstProposal, secondProposal, response];

  try {
    const quizzResult = await database.query(quizzQuery, valuesQuizz);
    return {
      id: quizzResult[0].insertId,
      question,
      firstProposal,
      secondProposal,
      response,
    };
  } catch (error) {
    console.error(error);
    throw new Error("Error retrieving quizz");
  }
};

const UpdateQuizzTutorial = async (tutorial) => {
  const { question, firstProposal, secondProposal, response, quizzId } =
    tutorial;

  const updateQuery = `UPDATE quizz SET question = ?, firstProposal = ?, secondProposal = ?, response = ? WHERE id = ?`;

  const valuesUpdate = [
    question,
    firstProposal,
    secondProposal,
    response,
    quizzId,
  ];

  try {
    await database.query(updateQuery, valuesUpdate);
    return {
      quizzId,
      question,
      firstProposal,
      secondProposal,
      response,
    };
  } catch (error) {
    console.error(error);
    throw new Error("Error updating quizz");
  }
};

const deleteQuizzByFormationId = async (id) => {
  const quizzQuery = "DELETE quizz.id FROM quizz WHERE id = ?";
  try {
    const response = await database.query(quizzQuery, [id]);
    if (response.affectedRows === 0) {
      throw new Error(`Quizz with ID ${id} not found`);
    }
    return response;
  } catch (error) {
    throw new Error("Error deleting quizz");
  }
};
module.exports = {
  getByIdQuizz,
  CreateQuizzTutorial,
  UpdateQuizzTutorial,
  deleteQuizzByFormationId,
};
