const database = require("../../database");
/* ---------- Get Table tutorial join table formation  ----------- */
/*  Nous avons joint les tables users, tutorials et steps par la table de jointure usersTutorials pour enregistrer les steps propre aux utilisateurs     */
const getTutorialByIconFormationNoId = async () => {
  try {
    const rows = await database.query(
      `SELECT formations.iconURL, tutorials.name, steps.id AS stepID, steps.stepOne, steps.stepTwo, steps.stepThree, users.email 
      FROM userstutorials JOIN users ON users.id = userstutorials.user_id 
      JOIN tutorials ON tutorials.id = userstutorials.tutorial_id JOIN steps ON steps.id = userstutorials.step_id 
      JOIN formations ON formations.id = tutorials.formation_id WHERE users.id = 2 AND ( SELECT COUNT(*) FROM tutorials AS t 
      JOIN userstutorials AS ut ON t.id = ut.tutorial_id 
      WHERE ut.user_id = 2 AND t.formation_id = formations.id AND steps.stepOne = 1 AND steps.stepTwo = 1 AND steps.stepThree = 1 ) = ( SELECT COUNT(*) FROM tutorials AS t JOIN userstutorials AS ut ON t.id = ut.tutorial_id WHERE ut.user_id = 2 AND t.formation_id = formations.id );`
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
// const getStepsByUserIdAndTutorialId = async (id) => {
//   try {
//     const rows = await database.query(
//       `SELECT steps.stepOne, steps.stepTwo, steps.stepThree, users.email
//       FROM userstutorials
//       JOIN steps ON steps.id = userstutorials.step_id
//       JOIN tutorials ON tutorials.id = userstutorials.tutorial_id
//       JOIN users ON users.id = userstutorials.user_id
//       JOIN formations ON tutorials.formation_id = formations.id
//       WHERE users.id = 2 AND tutorials.id = ?;`,
//       [id]
//     );
//     return rows[0];
//   } catch (error) {
//     console.error(error);
//     console.info("manager");
//     return null;
//   }
// };
// const updateStepByIdOfTutorial = async (id, stepToUpdate, updatedValue) => {
//   try {
//     const currentSteps = await getStepsByUserIdAndTutorialId(id);
//     const currentStepsMap = currentSteps.map((item) => ({
//       stepOne: item.stepOne,
//       stepTwo: item.stepTwo,
//       stepThree: item.stepThree,
//     }));
//     console.info("currentSteps", currentSteps);
//     console.info("currentStepsMap", currentStepsMap);
//     // Trouver l'objet d'étapes correspondant à l'étape à mettre à jour
//     const updatedStepObject = currentStepsMap.find(
//       (step) => stepToUpdate in step
//     );
//     if (updatedStepObject) {
//       // Mettre à jour la valeur de l'étape spécifiée
//       updatedStepObject[stepToUpdate] = updatedValue;
//       // Effectuer la mise à jour dans la base de données
//       const rows = await database.query(
//         `UPDATE steps
//         JOIN userstutorials ON steps.id = userstutorials.step_id
//         JOIN tutorials ON tutorials.id = userstutorials.tutorial_id
//         JOIN users ON users.id = userstutorials.user_id
//         JOIN formations ON tutorials.formation_id = formations.id
//         SET steps.stepOne = ?, steps.stepTwo = ?, steps.stepThree = ?
//         WHERE users.id = 2 AND tutorials.id = ?;`,
//         [
//           updatedStepObject.stepOne,
//           updatedStepObject.stepTwo,
//           updatedStepObject.stepThree,
//           id,
//         ]
//       );
//       console.info("rows", rows);
//       console.info("updatedSteps", updatedStepObject);
//       return rows[0];
//     }
//   } catch (error) {
//     console.error(error);
//     console.info("manager");
//     return null;
//   }
// };
module.exports = {
  getTutorialByIconFormationNoId,
  getTutorialByIconFormation,
  findTurorialByHerID,
  updateStepByIdOfTutorial,
};
