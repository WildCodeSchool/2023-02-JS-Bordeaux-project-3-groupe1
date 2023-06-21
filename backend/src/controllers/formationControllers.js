const FormationManager = require("../models/FormationManager");

const getAll = async (req, res) => {
  try {
    const formations = await FormationManager.getAllFormations();
    if (formations.length === 0) {
      res.status(404).send("No formations found");
    } else {
      res.status(200).send(formations);
    }
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports = { getAll };
