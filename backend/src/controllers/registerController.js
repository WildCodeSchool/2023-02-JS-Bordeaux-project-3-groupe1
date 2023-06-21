const { createUser } = require("../models/registerManager");
const { getAll } = require("../models/registerManager");

const postUsers = async (req, res) => {
  try {
    const userCreated = await createUser(req.body);
    if (userCreated.length === 0) {
      res.status(404).send("Error creating user");
    } else {
      res.status(200).send(userCreated);
    }
  } catch (err) {
    res.status(500).send(err);
  }
};

const getUsers = async (req, res) => {
  try {
    const user = await getAll();
    if (user.length === 0) {
      res.status(404).send("No user found");
    } else {
      res.status(200).send(user);
    }
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports = {
  postUsers,
  getUsers,
};
