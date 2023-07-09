const database = require("../../database");

const getAllFormations = async () => {
  try {
    const formations = await database.query(
      `
      SELECT formations.*, levelformations.id As levelFormationId, levelformations.level AS levelFormation 
      FROM formations
      JOIN levelformations ON levelformations.id = formations.levelFormation_id;
      `
    );
    return formations[0];
  } catch (error) {
    throw new Error("Error retrieving formations");
  }
};

module.exports = {
  getAllFormations,
};
