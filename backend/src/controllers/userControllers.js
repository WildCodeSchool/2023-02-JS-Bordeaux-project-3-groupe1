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

const create = async (req, res) => {
  try {
    const user = req.body;
    const response = await UserManager.createUser(user);

    if (response) {
      res.status(201).json(user);
    } else {
      res.status(404);
    }
  } catch (error) {
    console.error("Error creating user or uploading file: ", error);
    res.status(500).json({ message: "Failed to create user or upload file" });
  }
};

const update = async (req, res) => {
  const user = req.body;
  try {
    const response = await UserManager.updateUser(user);
    if (!response) {
      res.status(404).send("User not updated");
    } else {
      res.sendStatus(204);
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getOne,
  update,
  create,
  getTutorialByUserJustOneUser,
};
