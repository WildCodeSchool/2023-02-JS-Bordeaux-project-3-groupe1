const { findUser } = require("../models/registerManager");

const verifyUsers = async (req, res) => {
  try {
    const [existingUser] = await findUser(req.body);
    if (existingUser) {
      res.status(200).json(existingUser);
    } else {
      res.status(404).json("mauvaise adresse mail..");
    }
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports = {
  verifyUsers,
};
