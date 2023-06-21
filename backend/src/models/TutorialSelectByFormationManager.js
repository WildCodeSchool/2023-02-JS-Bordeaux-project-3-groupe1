const database = require("../../database");

const findFormationAndTutorial = async (id) => {
  try {
    const formationAndTutorial = await database.query(
      `SELECT tutorials.name
      FROM tutorials
      WHERE tutorials.formation_id = ?`,
      [id]
    );
    return formationAndTutorial[0];
  } catch (error) {
    throw new Error("Error retrieving tutorial");
  }
};

module.exports = {
  findFormationAndTutorial,
};
