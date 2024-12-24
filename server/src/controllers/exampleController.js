const exampleHandler = require('../handlers/exampleHandler');

const create = async (req, res) => {
  const { name } = req.body;

  try {
    const createdExample = await exampleHandler.create(name);

    res.status(201).json(createdExample);
  } catch (error) {
    console.error("Error creating field:", error);
    res.status(500).json({ error: "An error occurred while creating the field." });
  }
};

const update = async (req, res) => {
  res.status(201).json();
};

const read = async (req, res) => {
  res.status(200).json();
};

const remove = async (req, res) => {
  res.status(200).json();
};

const readAll = async (req, res) => {
  res.status(200).json();
};

module.exports = { 
  create, 
  read, 
  readAll,
  update,
  remove
};
