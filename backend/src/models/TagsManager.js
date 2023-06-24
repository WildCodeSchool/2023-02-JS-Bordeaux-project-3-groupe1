const database = require("../../database");

const CreateTagTutorial = async (tutorial) => {
  const { valuesTag } = tutorial;

  const tagQuery = `INSERT INTO tags (name) VALUES (?)`;

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

const UpdateTagTutorial = async (tutorial) => {
  const { valuesTag, tagId } = tutorial;

  const tagQuery = `UPDATE tags SET name = ? WHERE id = ?`;

  const valuesTags = [valuesTag, tagId];

  try {
    await database.query(tagQuery, valuesTags);
    return {
      tagId,
      valuesTag,
    };
  } catch (error) {
    console.error(error);
    throw new Error("Error retrieving quizz");
  }
};

module.exports = {
  CreateTagTutorial,
  UpdateTagTutorial,
};
