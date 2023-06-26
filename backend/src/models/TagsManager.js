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

const deleteTagsByTutorialId = async (id) => {
  const tagQuery = "DELETE tags.* FROM tags WHERE id = ?";
  try {
    const response = await database.query(tagQuery, [id]);
    if (response.affectedRows === 0) {
      throw new Error(`Tags with ID ${id} not found`);
    }
    return response;
  } catch (error) {
    throw new Error("Error deleting tags");
  }
};

module.exports = {
  CreateTagTutorial,
  UpdateTagTutorial,
  deleteTagsByTutorialId,
};
