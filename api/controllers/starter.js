const { Start } = require("../../models/index");

const createStarterRow = async (req, res) => {
  try {
    const { name, count } = req.body;

    // Create a new starter row
    const newStarter = await Start.create({
      name,
      count,
      createdAt: new Date(),
      updatedAt: new Date(),  
    });

    return res.status(201).json(newStarter);
  } catch (error) {
    console.error("Error creating starter row:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  createStarterRow,
};
