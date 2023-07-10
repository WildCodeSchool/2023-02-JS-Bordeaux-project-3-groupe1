const database = require("../../database");

const findByEmail = async (sendEmail) => {
  const query = "SELECT * FROM users WHERE email = ? ";

  try {
    const [user] = await database.query(query, sendEmail);
    return user;
  } catch (error) {
    throw new Error("Error finding user");
  }
};

module.exports = {
  findByEmail,
};
