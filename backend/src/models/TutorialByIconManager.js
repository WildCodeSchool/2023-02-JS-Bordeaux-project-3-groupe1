const database = require("../../database");

/* ---------- Get Table tutorial join table formation  ----------- */

const getTutorialByIconFormation = async () => {
  try {
    const rows = await database.query(
      "SELECT formations.name, tutorials.name, steps.stepOne, steps.stepTwo, steps.stepThree FROM formations JOIN tutorials ON tutorials.formation_id = formations.id JOIN userstutorials ON userstutorials.step_id = tutorials.id JOIN steps ON userstutorials.step_id = steps.id"
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
      `SELECT tutorials.name
      FROM tutorials
      WHERE tutorials.formation_id = ?`,
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
