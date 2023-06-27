const database = require("../../database");

/* ---------- Get Table tutorial join table formation  ----------- */

/*  Nous avons joint les tables users, tutorials et steps par la table de jointure usersTutorials pour enregistrer les steps propre aux utilisateurs     */

const getTutorialByIconFormation = async () => {
  try {
    const rows = await database.query(
      `SELECT users.id AS usersID, users.email AS mail, userstutorials.user_id AS TutoUserID, steps.id AS stepsID, tutorials.id AS tutoID, tutorials.name, userstutorials.tutorial_id As tutoTutoID, userstutorials.step_id AS tutoStepID, steps.stepOne, steps.stepTwo, steps.stepThree, formations.iconURL, tutorials.name FROM userstutorials 
      JOIN users ON users.id = userstutorials.user_id 
      JOIN steps ON steps.id = userstutorials.step_id 
      JOIN tutorials ON tutorials.id = userstutorials.tutorial_id 
      JOIN formations ON tutorials.formation_id = formations.id WHERE users.id = 1;`
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
      `SELECT tutorials.*, tutorials.id AS tutoID, steps.*, users.email
      FROM tutorials
      JOIN userstutorials ON tutorials.id = userstutorials.tutorial_id
      JOIN steps ON steps.id = userstutorials.step_id
      JOIN users ON users.id = userstutorials.user_id
      WHERE tutorials.formation_id = ? AND users.id = 1;`,
      [id]
    );
    return rows[0];
  } catch (error) {
    throw new Error("Error get formation", error);
  }
};
module.exports = {
  getTutorialByIconFormation,
  findTurorialByHerID,
};
