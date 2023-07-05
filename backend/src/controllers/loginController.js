const { findOne } = require("../models/registerManager");

const verifyUsers = async (req, res) => {
  try {
    console.info(req.body, "oook");
    const [existingUser] = await findOne(req.body);
    console.info(existingUser, "yoyoyo");
    if (existingUser) {
      res.status(200).send(existingUser);
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
