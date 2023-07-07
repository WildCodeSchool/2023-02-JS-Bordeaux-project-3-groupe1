const argon2 = require("argon2");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const { findByEmail } = require("../models/LoginManager");

const hashingOptions = {
  type: argon2.argon2id,
  memoryCost: 2 ** 16,
  timeCost: 5,
  parallelism: 1,
};

const verifyPassword = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const [hashPassword] = await findByEmail(email);
    console.info(hashPassword.hashedPassword, "hashed");
    const response = await argon2.verify(
      hashPassword.hashedPassword,
      password,
      hashingOptions
    );
    if (response) {
      const token = await jwt.sign(
        { sub: req.body.id },
        process.env.JWT_SECRET
      );
      res.status(200).send(token);
    }
  } catch (err) {
    console.error(err);
  }
  next();
};

module.exports = {
  verifyPassword,
};
