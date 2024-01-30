const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// Function to create a new admin
const createAdmin = async (req, res) => {
  console.log(req.body);
  try {
    const { name, email, password, schoolName } = req.body;
    const newAdmin = await prisma.admin.create({
      data: {
        name,
        email,
        password,
        schoolName,
      },
    });
    res.status(201).json({
      success: true,
      data: newAdmin,
    });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error creating admin", message: error.message });
  }
};

const getAllAdmins = async (req, res) => {
  try {
    const admins = await prisma.admin.findMany();

    console.log(admins);
    res.status(200).json(admins);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error fetching admins", message: error.message });
  }
};

// Function to get admin by ID
const getAdminById = async (req, res) => {
  try {
    const { id } = req.params;
    const admin = await prisma.admin.findUnique({
      where: {
        id: parseInt(id),
      },
      // You can include relations here if needed
    });
    if (!admin) {
      return res.status(404).json({ error: "Admin not found" });
    }
    res.status(200).json(admin);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error fetching admin", message: error.message });
  }
};

// Function to update an admin
const updateAdmin = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, password, schoolName /* Other fields */ } = req.body;
    const updatedAdmin = await prisma.admin.update({
      where: {
        id: parseInt(id),
      },
      data: {
        name,
        email,
        password,
        schoolName,
        // Update other fields here as needed
      },
    });
    res.status(200).json(updatedAdmin);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error updating admin", message: error.message });
  }
};

// Function to delete an admin
const deleteAdmin = async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.admin.delete({
      where: {
        id: parseInt(id),
      },
    });
    res.status(200).json({ message: "Admin deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error deleting admin", message: error.message });
  }
};

module.exports = {
  createAdmin,
  getAdminById,
  updateAdmin,
  deleteAdmin,
  getAllAdmins,
};
