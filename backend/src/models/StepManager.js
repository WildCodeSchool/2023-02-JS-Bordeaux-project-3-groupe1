const database = require("../../database");

const CreateSteps = async (tutorial) => {
  const { stepOne, stepTwo, stepThree, tutoId } = tutorial;

  const stepQuery = `INSERT INTO steps (stepOne, stepTwo, stepThree) VALUES (?, ?, ?)`;

  const valuesSteps = [stepOne ? 1 : 0, stepTwo ? 1 : 0, stepThree ? 1 : 0];

  try {
    const stepResult = await database.query(stepQuery, valuesSteps);
    const stepId = stepResult[0].insertId;

    const userstutorialsQuery = `INSERT INTO usersTutorials (user_id, tutorial_id, step_id, fl_status) VALUES (?, ?, ?, ?)`;

    const valuesUserstutorials = [2, tutoId, stepId, 0];

    await database.query(userstutorialsQuery, valuesUserstutorials);

    return {
      valuesUserstutorials,
    };
  } catch (error) {
    console.error(error);
    throw new Error("Error retrieving steps");
  }
};

const UpdateSteps = async (tutorial) => {
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

const deleteSteps = async (id) => {
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
  CreateSteps,
  UpdateSteps,
  deleteSteps,
};
