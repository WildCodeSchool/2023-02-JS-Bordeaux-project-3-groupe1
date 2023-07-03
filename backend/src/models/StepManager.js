const database = require("../../database");

const CreateStepsTutorial = async (tutorial) => {
  const { stepOne, stepTwo, stepThree } = tutorial;

  const stepQuery = `INSERT INTO steps (stepOne, stepTwo, stepThree) VALUES (?, ?, ?)`;

  const valuesSteps = [stepOne ? 0 : 1, stepTwo ? 0 : 1, stepThree ? 0 : 1];

  try {
    const stepResult = await database.query(stepQuery, valuesSteps);
    return {
      id: stepResult[0].insertId,
      valuesSteps,
    };
  } catch (error) {
    console.error(error);
    throw new Error("Error retrieving steps");
  }
};

const UpdateStepsTutorial = async (tutorial) => {
  const { stepOne, stepTwo, stepThree, setId } = tutorial;

  const stepQuery = `UPDATE steps SET stepOne = ?, stepTwo = ?, stepThree = ? WHERE id = ?`;

  const valuesSteps = [stepOne, stepTwo, stepThree, setId];

  try {
    await database.query(stepQuery, valuesSteps);
    return {
      setId,
      valuesSteps,
    };
  } catch (error) {
    console.error(error);
    throw new Error("Error retrieving steps");
  }
};

const deleteStepsByTutorialId = async (id) => {
  const stepQuery = "DELETE steps.* FROM steps WHERE id = ?";
  try {
    const response = await database.query(stepQuery, [id]);
    if (response.affectedRows === 0) {
      throw new Error(`Steps with ID ${id} not found`);
    }
    return response;
  } catch (error) {
    throw new Error("Error deleting steps");
  }
};

module.exports = {
  CreateStepsTutorial,
  UpdateStepsTutorial,
  deleteStepsByTutorialId,
};
