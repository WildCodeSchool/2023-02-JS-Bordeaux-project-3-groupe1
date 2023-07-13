const { findByEmail } = require("../models/SendEmailManager");
const { sendEmail } = require("../middlewares/sendEmail/sendEmail");

const verifyUsers = async (req, res) => {
  try {
    const [existingUser] = await findByEmail(req.body.email);
    console.info(existingUser, "yooooo");
    if (!existingUser) {
      res.status(403).json({ message: "Aucun compte à cette adresse mail." });
    } else {
      res.status(200).json(existingUser);
      sendEmail(existingUser);
    }
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports = {
  verifyUsers,
};
