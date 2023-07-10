const database = require("../../database");
/* ---------- Get Table tutorial join table formation  ----------- */
/*  Nous avons joint les tables users, tutorials et steps par la table de jointure usersTutorials pour enregistrer les steps propre aux utilisateurs     */
const getTutorialByIconFormationNoId = async () => {
  try {
    const rows = await database.query(
      `SELECT total_steps_by_user_true.total_stepsTotal,  total_steps_per_formation.NB_tuto, formations.iconURL, formations.id AS formationID, tutorials.name, tutorials.formation_id AS tutoFormationID, tutorials.id AS tutoId, steps.id AS stepID, COALESCE(stepOne,0) AS stepOne, COALESCE(stepTwo,0) AS stepTwo, COALESCE(stepThree,0) AS stepThree, user_tuto.email
      FROM tutorials
      LEFT JOIN (SELECT * FROM userstutorials LEFT JOIN users ON users.id = userstutorials.user_id WHERE userstutorials.user_id = 2) AS user_tuto  ON tutorials.id = user_tuto.tutorial_id
      LEFT JOIN steps ON steps.id = user_tuto.step_id
      LEFT JOIN formations ON formations.id = tutorials.formation_id  AND (
      SELECT COUNT(*) FROM tutorials
JOIN userstutorials AS user_tuto ON tutorials.id = user_tuto.tutorial_id
      WHERE  user_tuto.user_id = 2  )
      LEFT JOIN (SELECT formation_id, COUNT(tutorials.id)*3 AS NB_tuto FROM formations
JOIN tutorials ON tutorials.formation_id = formations.id
GROUP BY formation_id) AS total_steps_per_formation
ON total_steps_per_formation.formation_id = formations.id
LEFT JOIN (SELECT
    tutorials.formation_id,
    user_id,
	SUM((steps.stepOne) + (steps.stepTwo) + (steps.stepThree)) AS total_stepsTotal
  FROM userstutorials
  LEFT JOIN tutorials ON tutorials.id = userstutorials.tutorial_id
  LEFT JOIN steps ON steps.id = userstutorials.step_id
  GROUP BY tutorials.formation_id, user_id) AS total_steps_by_user_true ON total_steps_by_user_true.user_id = user_tuto.user_id AND total_steps_by_user_true.formation_id = formations.id;`
    );
    return rows[0];
  } catch (error) {
    throw new Error("Error get formation", error);
  }
};
const getTutorialByIconFormation = async (id) => {
  try {
    const rows = await database.query(
      `SELECT userstutorials.*, tutorials.*, tutorials.id AS tutoId, steps.* 
      FROM userstutorials LEFT JOIN tutorials ON tutorials.id = userstutorials.tutorial_id 
      JOIN steps ON steps.id = userstutorials.step_id WHERE userstutorials.user_id = 2 AND tutorials.formation_id = ? 
      UNION ALL SELECT NULL, NULL, NULL, NULL, tutorials.*, tutorials.id AS tutoId, NULL, NULL, NULL, NULL FROM tutorials 
      WHERE tutorials.formation_id = ? AND tutorials.id NOT IN ( SELECT userstutorials.tutorial_id FROM userstutorials 
      WHERE userstutorials.user_id = 2);`,
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
const updateStepByIdOfTutorial = async (id, stepToUpdate, updatedValue) => {
  try {
    const rows = await database.query(
      `UPDATE steps
      JOIN userstutorials ON steps.id = userstutorials.step_id
      JOIN tutorials ON tutorials.id = userstutorials.tutorial_id
      JOIN users ON users.id = userstutorials.user_id
      JOIN formations ON tutorials.formation_id = formations.id
      SET ${stepToUpdate} = ?
      WHERE users.id = 2 AND tutorials.id = ?;`,
      [updatedValue, id]
    );
    return rows[0];
  } catch (error) {
    console.error(error);
    console.info("manager");
    return null;
  }
};

module.exports = {
  getTutorialByIconFormationNoId,
  getTutorialByIconFormation,
  findTurorialByHerID,
  updateStepByIdOfTutorial,
};
