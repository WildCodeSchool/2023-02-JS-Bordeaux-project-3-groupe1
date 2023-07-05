const { body, validationResult } = require("express-validator");

const userValidator = [
  body("lastname").notEmpty().isLength({ max: 255 }).isString(),
  body("firstname").notEmpty().isLength({ max: 255 }).isString(),
  body("email").notEmpty().isLength({ max: 255 }).isString(),
  body("city").notEmpty().isLength({ max: 255 }).isString(),
  body("postalCode").notEmpty().isLength({ max: 255 }).isString(),
  body("dateOfBirth").notEmpty().isLength({ max: 255 }).isString(),
  body("gender").notEmpty().isLength({ max: 255 }).isString(),
  body("picture").notEmpty().isLength({ max: 255 }).isString(),

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
