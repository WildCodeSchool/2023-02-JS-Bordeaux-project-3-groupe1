const UserManager = require("../models/UserManager");

const getTutorialByUserJustOneUser = async (req, res) => {
  try {
    const results = await UserManager.getTutorialByUser();
    if (results.length === 0) {
      res.status(404).send("no formations found");
    } else {
      res.status(200).json(results);
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

const getAll = async (req, res) => {
  try {
    const users = await UserManager.getAllUsers();
    if (users.length === 0) {
      res.status(404).send("No users found");
    } else {
      res.status(200).send(users);
    }
  } catch (err) {
    res.status(500).send(err);
  }
};

const getOne = async (req, res) => {
  try {
    const { id } = req.params;
    const userById = await UserManager.getUserById(id);
    if (userById.length === 0) {
      res.status(404).json({ error: "User not found" });
    } else {
      res.status(200).json(userById[0]);
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const update = async (req, res) => {
  const { id } = req.params;
  const user = req.body;
  try {
    const response = await UserManager.updateUser(user, id);
    if (response.length === 0) {
      res.status(404).send("User not updated");
    } else {
      res.sendStatus(204);
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getAll,
  getOne,
  update,
  create,
  getTutorialByUserJustOneUser,
};
