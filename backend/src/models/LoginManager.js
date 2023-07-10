const database = require("../../database");

const findByEmail = async (login) => {
  const query = `SELECT users.*, roles.name AS roleName 
    FROM users
    LEFT JOIN roles ON roles.id = users.role_id 
    WHERE email = ? `;

  try {
    const [user] = await database.query(query, login);
    return user;
  } catch (error) {
    throw new Error("Error finding user");
  }
};

module.exports = {
  findByEmail,
};
