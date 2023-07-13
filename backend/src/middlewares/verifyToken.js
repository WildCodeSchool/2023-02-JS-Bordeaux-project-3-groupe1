const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  if (req.headers.authorization?.split(" ")[0] === "Bearer") {
    const token = req.headers.authorization?.split(" ")[1];
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    req.body.decodedToken = decodedToken;
    next();
  } else res.status(404).send({ message: "Invalid token" });
};

module.exports = { verifyToken };
