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

const getAllTutorialsTags = async () => {
  try {
    const tutorialsTags = await database.query(
      "SELECT * FROM tutorials INNER JOIN tutorialsTags ON tutorials.id = tutorialsTags.tutorial_id INNER JOIN tags ON tutorialsTags.tag_id = tags.id"
    );
    return tutorialsTags[0];
  } catch (error) {
    throw new Error("Error retrieving tutorialsTags");
  }
};

module.exports = {
  CreateTutorialsTags,
  getAllTutorialsTags,
};
