const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const createClass = async (req, res) => {
  try {
    const { ClassName, schoolId } = req.body;
    const newClass = await prisma.class.create({
      data: {
        ClassName,
        school: { connect: { id: parseInt(schoolId) } },
      },
    });
    res.status(201).json(newClass);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error creating class", message: error.message });
  }
};

const getClassById = async (req, res) => {
  try {
    const { id } = req.params;
    const classData = await prisma.class.findUnique({
      where: { id: parseInt(id) },
      include: { school: true, subjects: true, students: true, teachers: true },
    });
    if (!classData) {
      return res.status(404).json({ error: "Class not found" });
    }
    res.status(200).json(classData);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error fetching class", message: error.message });
  }
};

const getAllClasses = async (req, res) => {
  try {
    const classes = await prisma.class.findMany();
    res.status(200).json(classes);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error fetching classes", message: error.message });
  }
};

const updateClass = async (req, res) => {
  try {
    const { id } = req.params;
    const { ClassName, schoolId /* Other fields */ } = req.body;
    const updatedClass = await prisma.class.update({
      where: { id: parseInt(id) },
      data: {
        ClassName,
        school: { connect: { id: parseInt(schoolId) } },
        // Update other fields here as needed
      },
    });
    res.status(200).json(updatedClass);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error updating class", message: error.message });
  }
};

const deleteClass = async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.class.delete({ where: { id: parseInt(id) } });
    res.status(200).json({ message: "Class deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error deleting class", message: error.message });
  }
};

module.exports = {
  createClass,
  getClassById,
  getAllClasses,
  updateClass,
  deleteClass,
};
