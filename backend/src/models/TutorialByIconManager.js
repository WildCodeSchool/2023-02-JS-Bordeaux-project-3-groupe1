const database = require("../../database");

/* ---------- Get Table tutorial join table formation  ----------- */

/*  Nous avons joint les tables users, tutorials et steps par la table de jointure usersTutorials pour enregistrer les steps propre aux utilisateurs     */

const getTutorialByIconFormation = async (id) => {
  try {
    const rows = await database.query(
      `SELECT * FROM tutorials
      LEFT JOIN (SELECT * FROM userstutorials WHERE userstutorials.user_id = 2) AS usertuto
      ON usertuto.tutorial_id = tutorials.id
      WHERE tutorials.formation_id = ?`,
      [id]
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
