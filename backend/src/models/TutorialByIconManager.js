const database = require("../../database");

/* ---------- Get Table tutorial join table formation  ----------- */

/*  Nous avons joint les tables users, tutorials et steps par la table de jointure usersTutorials pour enregistrer les steps propre aux utilisateurs     */

const getTutorialByIconFormation = async (id) => {
  try {
    const rows = await database.query(
      "SELECT userstutorials.*, tutorials.*, tutorials.id AS tutoId, steps.* FROM userstutorials LEFT JOIN tutorials ON tutorials.id = userstutorials.tutorial_id JOIN steps ON steps.id = userstutorials.step_id WHERE userstutorials.user_id = 2 AND tutorials.formation_id = ? UNION ALL SELECT NULL, NULL, NULL, NULL, tutorials.*, tutorials.id AS tutoId, NULL, NULL, NULL, NULL FROM tutorials WHERE tutorials.formation_id = ? AND tutorials.id NOT IN ( SELECT userstutorials.tutorial_id FROM userstutorials WHERE userstutorials.user_id = 2);",
      [id, id]
    );
    return rows[0];
  } catch (error) {
    throw new Error("Error get formation", error);
  }
};

/* ---------- Get tutorial by id click  ----------- */

const findTurorialByHerID = async (id) => {
  try {
    const rows = await database.query(
      `SELECT tutorials.name, tutorials.id AS tutoID, steps.*, users.email
      FROM tutorials
      JOIN userstutorials ON tutorials.id = userstutorials.tutorial_id
      JOIN tutorials ON tutorials.id = id
      JOIN steps ON steps.id = tutorialsSteps.step_id
      JOIN users ON users.id = userstutorials.user_id
      WHERE tutorials.formation_id = ? AND users.id = 2;`,
      [id]
    );
    return rows[0];
  } catch (error) {
    throw new Error("Error get formation", error);
  }
};
const updateStepByIdOfTutorial = async (id, stepOne, stepTwo, stepThree) => {
  try {
    const rows = await database.query(
      `UPDATE steps
      JOIN userstutorials ON steps.id = userstutorials.step_id
      JOIN tutorials ON tutorials.id = userstutorials.tutorial_id
      JOIN users ON users.id = userstutorials.user_id
      JOIN formations ON tutorials.formation_id = formations.id
      SET steps.stepOne = ?, steps.stepTwo = ?, steps.stepThree = ?
      WHERE users.id = 1 AND tutorials.id = ?;`,
      [stepOne, stepTwo, stepThree, id]
    );

    return rows[0];
  } catch (error) {
    console.error(error);
    console.info("manager");
    return null;
  }
};

module.exports = {
  getTutorialByIconFormation,
  findTurorialByHerID,
  updateStepByIdOfTutorial,
};
