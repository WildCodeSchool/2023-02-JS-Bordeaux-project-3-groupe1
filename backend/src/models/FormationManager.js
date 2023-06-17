const database = require("../../database");

const getAllFormations = async () => {
  try {
    const formations = await database.query("SELECT * FROM formations");
    return formations[0];
  } catch (error) {
    throw new Error("Error retrieving formations");
  }
};

module.exports = {
  getAllFormations,
};
