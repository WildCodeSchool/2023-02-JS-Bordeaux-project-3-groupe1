const database = require("../../database");

const getTutorialByUser = async () => {
  try {
    const rows = await database.query(
      `SELECT formations.iconURL, tutorials.name, steps.id AS stepID, steps.stepOne, steps.stepTwo, steps.stepThree, users.email FROM userstutorials JOIN users ON users.id = userstutorials.user_id JOIN tutorials ON tutorials.id = userstutorials.tutorial_id JOIN steps ON steps.id = userstutorials.step_id JOIN formations ON formations.id = tutorials.formation_id WHERE users.id = 2`
    );
    return rows[0];
  } catch (error) {
    throw new Error("Error get tutorials", error);
  }
};

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
  getUserById,
  updateUser,
  getTutorialByUser,
};
