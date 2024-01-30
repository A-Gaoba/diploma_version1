const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

beforeAll(async () => {
  await prisma.admin.deleteMany({});
});

afterAll(async () => {
  await prisma.$disconnect();
});

describe("Test Admin CRUD operations", () => {
  let adminId;

  it("Should create a new admin", async () => {
    const newAdmin = {
      name: "Test Admin",
      email: "testAdmin@example.com",
      password: "$2a$10$rYX7hgNqK5",
      schoolName: "nahdah",
    };

    const admin = await prisma.admin.create({
      data: newAdmin,
    });

    expect(admin.id).toBeDefined();
    expect(admin.name).toEqual(newAdmin.name);
    expect(admin.email).toEqual(newAdmin.email);
    expect(admin.password).toEqual(newAdmin.password);
    expect(admin.schoolName).toEqual(newAdmin.schoolName);

    adminId = admin.id;
  });

  it("Should read an admin by its id", async () => {
    const admin = await prisma.admin.findUnique({
      where: { id: adminId },
    });
    expect(admin).not.toBeNull();
    expect(admin.id).toEqual(adminId);
  });

  it("Should update the admin's information", async () => {
    const updatedInfo = {
      name: "UpdatedName",
      email: "updatedemail@gmail.com",
      password: "updated_password",
      schoolName: "updated school name",
    };
    const updatedAdmin = await prisma.admin.update({
      where: { id: adminId },
      data: updatedInfo,
    });
    expect(updatedAdmin.name).toEqual(updatedInfo.name);
    expect(updatedAdmin.email).toEqual(updatedInfo.email);
    expect(updatedAdmin.password).toEqual(updatedInfo.password);
    expect(updatedAdmin.schoolName).toEqual(updatedInfo.schoolName);
  });

  
});
