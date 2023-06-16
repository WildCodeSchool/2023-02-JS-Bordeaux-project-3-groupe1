const FormationManager = require("../models/FormationManager");

const getAll = async (req, res) => {
  try {
    const response = await FormationManager.getAllFormations();
    res.send(response[0]);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error retrieving users");
  }
};

module.exports = { getAll };
