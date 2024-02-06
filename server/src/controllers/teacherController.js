const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const createTeacher = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      image,
      subject,
      timeOfClass,
      gender,
      dateOfBirth,
      email,
      phone,
      achievements,
      classSchedule,
      officeLocation,
      preferredCommunication,
      bio,
    } = req.body;

    const newTeacher = await prisma.teacher.create({
      data: {
        firstName,
        lastName,
        image,
        subject,
        timeOfClass,
        gender,
        dateOfBirth,
        email,
        phone,
        achievements,
        classSchedule,
        officeLocation,
        preferredCommunication,
        bio,
      },
    });

    res.status(201).json({ success: true, data: newTeacher });
  } catch (error) {
    console.error("Error creating teacher:", error);
    res
      .status(500)
      .json({ error: "Internal server error", message: error.message });
  }
};

const getAllTeachers = async (req, res) => {
  try {
    const teachers = await prisma.teacher.findMany();
    res.status(200).json(teachers);
  } catch (error) {
    console.error("Error fetching teachers:", error);
    res
      .status(500)
      .json({ error: "Internal server error", message: error.message });
  }
};

const getTeacherById = async (req, res) => {
  try {
    const id = parseInt(req.params.id, 10);
    const teacher = await prisma.teacher.findUnique({ where: { id } });

    if (!teacher) {
      return res.status(404).json({ error: "Teacher not found" });
    }

    res.status(200).json(teacher);
  } catch (error) {
    console.error("Error fetching teacher:", error);
    res
      .status(500)
      .json({ error: "Internal server error", message: error.message });
  }
};

const updateTeacher = async (req, res) => {
  try {
    const id = parseInt(req.params.id, 10);
    const {
      firstName,
      lastName,
      image,
      subject,
      timeOfClass,
      gender,
      dateOfBirth,
      email,
      phone,
      achievements,
      classSchedule,
      officeLocation,
      preferredCommunication,
      bio,
    } = req.body;

    const updatedTeacher = await prisma.teacher.update({
      where: { id },
      data: {
        firstName,
        lastName,
        image,
        subject,
        timeOfClass,
        gender,
        dateOfBirth,
        email,
        phone,
        achievements,
        classSchedule,
        officeLocation,
        preferredCommunication,
        bio,
      },
    });

    res.status(200).json(updatedTeacher);
  } catch (error) {
    console.error("Error updating teacher:", error);
    res
      .status(500)
      .json({ error: "Internal server error", message: error.message });
  }
};

const deleteTeacher = async (req, res) => {
  try {
    const id = parseInt(req.params.id, 10);
    await prisma.teacher.delete({ where: { id } });
    res.status(200).json({ message: "Teacher deleted successfully" });
  } catch (error) {
    console.error("Error deleting teacher:", error);
    res
      .status(500)
      .json({ error: "Internal server error", message: error.message });
  }
};

module.exports = {
  createTeacher,
  getAllTeachers,
  getTeacherById,
  updateTeacher,
  deleteTeacher,
};
