const database = require("../../database");

const getTutorialByUser = async (userId) => {
  try {
    const rows = await database.query(
      `SELECT formations.iconURL, tutorials.name, tutorials.id AS tutoId, steps.id AS stepID, steps.stepOne, steps.stepTwo, steps.stepThree, user_tuto.email 
      FROM tutorials
      LEFT JOIN (SELECT * FROM userstutorials LEFT JOIN users ON users.id = userstutorials.user_id WHERE userstutorials.user_id = ?) AS user_tuto  ON tutorials.id = user_tuto.tutorial_id 
      LEFT JOIN steps ON steps.id = user_tuto.step_id
      LEFT JOIN formations ON formations.id = tutorials.formation_id`,
      [userId]
    );
    return rows[0];
  } catch (error) {
    throw new Error("Error get tutorials", error);
  }
};

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

const updateUserLevel = async (user, userId) => {
  const { level } = user;

  const userQuery = `UPDATE users SET level = ? WHERE id = ?`;

  const valuesUser = [level, userId];
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

const deleteUser = async (id) => {
  const userQuery = "DELETE users.* FROM users WHERE id = ?";
  try {
    const response = await database.query(userQuery, [id]);
    if (response.affectedRows === 0) {
      throw new Error(`User with ID ${id} not found`);
    }
    return response;
  } catch (error) {
    throw new Error("Error deleting user");
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  updateUser,
  updateUserLevel,
  getTutorialByUser,
  deleteUser,
};
