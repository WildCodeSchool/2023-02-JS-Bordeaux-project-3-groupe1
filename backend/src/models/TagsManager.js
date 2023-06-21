const database = require("../../database");

const CreateTagTutorial = async (tutorial) => {
  const { valuesTag } = tutorial;

  const tagQuery = `INSERT INTO tags (nameTag) VALUES (?)`;

  const valuesTags = [valuesTag];

  try {
    const tagResult = await database.query(tagQuery, valuesTags);
    return {
      id: tagResult[0].insertId,
      valuesTag,
    };
  } catch (error) {
    console.error(error);
    throw new Error("Error retrieving quizz");
  }
};
module.exports = {
  CreateTagTutorial,
};
