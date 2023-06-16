const database = require("../../database");

const getAllImage = async () => {
  try {
    const upload = await database.query("SELECT * FROM uploads");
    return upload;
  } catch (error) {
    console.error(error);
    throw new Error("Error retrieving user");
  }
};

const createUpload = async (newFileName) => {
  try {
    database.query(
      "INSERT INTO uploads (nameFile) VALUES (?)",
      [newFileName],
      (error) => {
        if (error) {
          console.error("Error inserting item into database: ", error);
          throw new Error("Failed to create item");
        }
        console.info("Item created successfully");
      }
    );
  } catch (error) {
    console.error(error);
    throw new Error("Error inserting user");
  }
};

module.exports = {
  getAllImage,
  createUpload,
};
