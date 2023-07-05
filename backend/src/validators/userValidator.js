const { body, validationResult } = require("express-validator");

const userValidator = [
  body("lastname").isLength({ max: 255 }).isString(),
  body("firstname").isLength({ max: 255 }).isString(),
  body("email").isLength({ max: 255 }).isString(),
  body("city").isLength({ max: 255 }).isString(),
  body("location").isLength({ max: 255 }).isString(),
  body("birthdayDate").isLength({ max: 255 }).isString(),
  body("gender").isLength({ max: 255 }).isString(),
  body("newFilename").isLength({ max: 255 }).isString(),

  (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      res.status(422).json({ validationErrors: errors.array() });
    } else {
      next();
    }
  },
];

module.exports = {
  userValidator,
};
