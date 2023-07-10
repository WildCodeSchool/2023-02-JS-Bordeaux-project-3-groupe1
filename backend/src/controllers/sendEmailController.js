const { findByEmail } = require("../models/SendEmailManager");

const verifyUsers = async (req, res) => {
  try {
    const [existingUser] = await findByEmail(req.body.email);
    if (!existingUser) {
      res.status(403).json({ message: "Aucun compte à ctte adresse mail." });
    }
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports = {
  verifyUsers,
};
