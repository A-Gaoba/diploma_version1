const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// Function to validate admin data before creation
const validateAdminData = (adminData) => {
  // Add your validation logic here
  // For example, check if required fields are present, validate email, etc.
};

// Function to create a new admin
const createAdmin = async (adminData) => {
  try {
    // Validate admin data before creating
    validateAdminData(adminData);

    const newAdmin = await prisma.admin.create({
      data: adminData,
    });
    return newAdmin;
  } catch (error) {
    throw new Error(`Error creating admin: ${error.message}`);
  }
};

// Function to update an admin
const updateAdmin = async (adminId, adminData) => {
  try {
    // Validate admin data before updating
    validateAdminData(adminData);

    const updatedAdmin = await prisma.admin.update({
      where: {
        id: parseInt(adminId),
      },
      data: adminData,
    });
    return updatedAdmin;
  } catch (error) {
    throw new Error(`Error updating admin: ${error.message}`);
  }
};

// Add more service functions as needed for admin-related operations

module.exports = {
  createAdmin,
  updateAdmin,
  // Add other functions here
};
