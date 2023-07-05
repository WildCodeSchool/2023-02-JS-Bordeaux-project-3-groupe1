const argon2 = require("argon2");

const verifyPassword = (req, res, next) => {
  const { password, hashedPassword } = req.body;
  console.info(req.body);
  argon2
    .verify(hashedPassword, password)
    .then((isMatch) => {
      if (isMatch) {
        console.info(isMatch);
        res.status(200).send(isMatch);
        next();
      } else {
        res.sendStatus(401);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  verifyPassword,
};
