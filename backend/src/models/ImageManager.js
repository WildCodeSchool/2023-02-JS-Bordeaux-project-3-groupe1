const database = require("../../database");

const getAllImages = async () => {
  try {
    const uploads = await database.query("SELECT * FROM uploads");
    return uploads;
  } catch (error) {
    console.error(error);
    throw new Error("Error retrieving uploads");
  }
};

const createImage = async (newFileName) => {
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
  getAllImages,
  createImage,
};
