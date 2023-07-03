const database = require("../../database");

const findUser = async (register) => {
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

module.exports = {
  findUser,
};
