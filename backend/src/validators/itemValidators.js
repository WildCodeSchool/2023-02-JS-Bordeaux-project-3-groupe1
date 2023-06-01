const { body, validationResult } = require("express-validator");

const validateItem = [
  body("name").notEmpty().isLength({ max: 255 }).isString(),
  body("age").notEmpty().isInt(),
  body("email").notEmpty().isEmail(),

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
  validateItem,
};
