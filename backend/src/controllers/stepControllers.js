const StepManager = require("../models/StepManager");

const create = async (req, res) => {
  try {
    const step = req.body;
    const stepCreated = await StepManager.CreateSteps(step);

    if (stepCreated) {
      res.status(201).json(step);
    } else {
      res.status(404);
    }
  } catch (error) {
    console.error("Error creating step or uploading file: ", error);
    res.status(500).json({ message: "Failed to create step or upload file" });
  }
};

module.exports = {
  create,
};
