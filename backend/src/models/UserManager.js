const database = require("../../database");

const getUserById = async (id) => {
  try {
    const tutorial = await database.query("SELECT * FROM users WHERE id = ?", [
      id,
    ]);
    return tutorial[0];
  } catch (error) {
    throw new Error("Error retrieving user");
  }
};

const createUser = async (user) => {
  try {
    const {
      lastname,
      firstname,
      email,
      city,
      postalCode,
      dateOfBirth,
      gender,
      picture,
    } = user;

    const userQuery = `INSERT INTO users (lastname, firstname, email, city, postalCode, dateOfBirth, gender, picture,) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;

    const valuesUser = [
      lastname,
      firstname,
      email,
      city,
      postalCode,
      dateOfBirth,
      gender,
      picture,
    ];

    const userResult = await database.query(userQuery, valuesUser);
    const userlId = userResult[0].insertId;

    return {
      userlId,
      lastname,
      firstname,
      email,
      city,
      postalCode,
      dateOfBirth,
      gender,
      picture,
    };
  } catch (error) {
    throw new Error("Error creating user", error);
  }
};

const updateUser = async (user) => {
  try {
    const {
      userlId,
      lastname,
      firstname,
      email,
      city,
      postalCode,
      dateOfBirth,
      gender,
      picture,
    } = user;

    const userQuery = `UPDATE users SET lastname = ?, firstname = ?, email = ?, city = ?, postalCode = ?, dateOfBirth = ?, gender = ?, picture = ? WHERE id = ?`;

    const valuesUser = [
      userlId,
      lastname,
      firstname,
      email,
      city,
      postalCode,
      dateOfBirth,
      gender,
      picture,
    ];

    await database.query(userQuery, valuesUser);

    return {
      userlId,
      lastname,
      firstname,
      email,
      city,
      postalCode,
      dateOfBirth,
      gender,
      picture,
    };
  } catch (error) {
    throw new Error("Error updating user with image", error);
  }
};

module.exports = {
  getUserById,
  createUser,
  updateUser,
};
