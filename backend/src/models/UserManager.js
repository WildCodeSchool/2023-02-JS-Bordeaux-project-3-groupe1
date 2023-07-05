const database = require("../../database");

const getAllUsers = async () => {
  try {
    const users = await database.query(
      "SELECT id, role_id, level, email, birthdayDate, firstname, lastname, location, gender, city, picture FROM users"
    );
    return users[0];
  } catch (error) {
    throw new Error("Error retrieving tutorials");
  }
};

const getUserById = async (id) => {
  try {
    const tutorial = await database.query(
      "SELECT id, role_id, level, email, birthdayDate, firstname, lastname, location, gender, city, picture FROM users WHERE id = ?",
      [id]
    );
    return tutorial[0];
  } catch (error) {
    throw new Error("Error retrieving user");
  }
};

const updateUser = async (user, userId) => {
  const {
    lastname,
    firstname,
    email,
    city,
    location,
    birthdayDate,
    gender,
    newFilename,
  } = user;

  const locationInt = parseInt(location, 10);

  const userQuery = `UPDATE users SET lastname = ?, firstname = ?, email = ?, city = ?, location = ?, birthdayDate = ?, gender = ?, picture = ? WHERE id = ?`;

  const valuesUser = [
    lastname,
    firstname,
    email,
    city,
    locationInt,
    birthdayDate,
    gender,
    newFilename,
    userId,
  ];
  try {
    await database.query(userQuery, valuesUser);
    return {
      userId,
      valuesUser,
    };
  } catch (error) {
    throw new Error("Error updating user with image", error);
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  updateUser,
};
