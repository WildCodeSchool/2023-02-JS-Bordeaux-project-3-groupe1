const database = require("../../database");

const CreateTutorialsTags = async (tutorialId, tagId) => {
  const tutorialsTagsQuery = `INSERT INTO tutorialsTags (tutorial_id, tag_id) VALUES (?, ?)`;

  const valuesTutorialsTags = [tutorialId, tagId];

  try {
    await database.query(tutorialsTagsQuery, valuesTutorialsTags);
    return {
      tutorialId,
      tagId,
    };
  } catch (error) {
    console.error(error);
    throw new Error("Error retrieving quizz");
  }
};

const getTutorialTagsById = async (id) => {
  try {
    const tutorialsTags = await database.query(
      "SELECT tutorials.*, tags.id, tags.name AS nameTag FROM tutorials INNER JOIN tutorialsTags ON tutorials.id = tutorialsTags.tutorial_id INNER JOIN tags ON tutorialsTags.tag_id = tags.id WHERE tags.id = ?",
      [id]
    );
    return tutorialsTags[0];
  } catch (error) {
    throw new Error("Error retrieving tutorialsTags");
  }
};

module.exports = {
  CreateTutorialsTags,
  getTutorialTagsById,
};
