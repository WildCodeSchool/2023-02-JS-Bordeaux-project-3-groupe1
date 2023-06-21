const database = require("../../database");

const createUser = async (register) => {
  const query = "INSERT INTO users ( email, hashedPassword) VALUES (?,?)";

  const { email, hashedPassword } = register;

  const values = [email, hashedPassword];
  try {
    const RegisterResult = await database.query(query, values);
    return {
      id: RegisterResult.insertId,
      email,
      hashedPassword,
    };
  } catch (error) {
    throw new Error("Error creating your profil");
  }
};

const getAll = async () => {
  try {
    const user = await database.query("SELECT * from users");
    return user[0];
  } catch (error) {
    throw new Error("Error retrieving formations");
  }
};

module.exports = {
  createUser,
  getAll,
};
