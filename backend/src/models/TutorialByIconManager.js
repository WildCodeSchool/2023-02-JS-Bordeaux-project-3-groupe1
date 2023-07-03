const database = require("../../database");

/* ---------- Get Table tutorial join table formation  ----------- */

/*  Nous avons joint les tables users, tutorials et steps par la table de jointure usersTutorials pour enregistrer les steps propre aux utilisateurs     */

const getTutorialByIconFormation = async (id) => {
  try {
    const rows = await database.query(
      "select * from userstutorials left join tutorials on tutorials.id = userstutorials.tutorial_id JOIN steps ON steps.id = userstutorials.step_id where userstutorials.user_id = 1 and formation_id = ? union all select null,null,null,null,tutorials.*,null,null,null,null from tutorials where formation_id = ? and tutorials.id not in (select userstutorials.tutorial_id from userstutorials where userstutorials.user_id = 1);",
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
