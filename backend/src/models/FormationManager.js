const database = require("../../database");

const getAllFormations = async () => {
  try {
    const formations = await database.query("SELECT * FROM formations");
    return formations;
  } catch (error) {
    console.error(error);
    throw new Error("Error retrieving formations");
  }
};

module.exports = {
  getAllFormations,
};
