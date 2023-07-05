const database = require("../../database");

const findOne = async (login) => {
  const query = "SELECT * FROM users WHERE email = ? AND hashedPassword =? ";
  const { email, hashedPassword } = login;
  const value = [email, hashedPassword];
  console.info(value);
  try {
    const [user] = await database.query(query, value);
    console.info(user);
    return user;
  } catch (error) {
    throw new Error("Error finding user");
  }
};

module.exports = {
  findOne,
};
