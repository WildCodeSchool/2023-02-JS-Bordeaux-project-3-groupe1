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
  deleteQuizzByFormationId,
};
