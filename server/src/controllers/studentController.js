const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const createStudent = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      dateOfBirth,
      email,
      phoneNumber,
      address,
      grade,
      className,
      city,
      image,
    } = req.body;

    const newStudent = await prisma.student.create({
      data: {
        firstName,
        lastName,
        dateOfBirth,
        email,
        phoneNumber,
        address,
        grade: parseInt(grade),
        class: className,
        city,
        image,
      },
    });

    res.status(201).json({
      success: true,
      data: newStudent,
    });
  } catch (error) {
    console.error("Error creating student:", error);
    res.status(500).json({
      error: "Internal server error",
      message: error.message,
    });
  }
};

const getAllStudents = async (req, res) => {
  try {
    const students = await prisma.student.findMany();
    res.status(200).json(students);
  } catch (error) {
    console.error("Error fetching students:", error);
    res.status(500).json({
      error: "Internal server error",
      message: error.message,
    });
  }
};

const getStudentById = async (req, res) => {
  try {
    const id = parseInt(req.params.id, 10);
    const student = await prisma.student.findUnique({
      where: { id },
    });

    if (!student) {
      return res.status(404).json({ error: "Student not found" });
    }

    res.status(200).json(student);
  } catch (error) {
    console.error("Error fetching student:", error);
    res.status(500).json({
      error: "Internal server error",
      message: error.message,
    });
  }
};

const updateStudent = async (req, res) => {
  try {
    const id = parseInt(req.params.id, 10); // Convert id to integer
    const {
      firstName,
      lastName,
      dateOfBirth,
      email,
      phoneNumber,
      address,
      grade,
      className,
      city,
      image,
    } = req.body;

    const updatedStudent = await prisma.student.update({
      where: { id },
      data: {
        firstName,
        lastName,
        dateOfBirth,
        email,
        phoneNumber,
        address,
        grade: parseInt(grade, 10),
        class: className,
        city,
        image,
      },
    });

    res.status(200).json(updatedStudent);
  } catch (error) {
    console.error("Error updating student:", error);
    res.status(500).json({
      error: "Internal server error",
      message: error.message,
    });
  }
};

const deleteStudent = async (req, res) => {
  try {
    const id = parseInt(req.params.id, 10); // Convert id to integer
    await prisma.student.delete({
      where: { id },
    });
    res.status(200).json({ message: "Student deleted successfully" });
  } catch (error) {
    console.error("Error deleting student:", error);
    res.status(500).json({
      error: "Internal server error",
      message: error.message,
    });
  }
};

module.exports = {
  createStudent,
  getAllStudents,
  getStudentById,
  updateStudent,
  deleteStudent,
};
