const request = require("supertest");
const app = require("../../app");


describe("Admin API endpoints", () => {
  let createdAdminId; // To store the ID of the created admin for further testing

  it("should create a new admin", async () => {
    const res = await request(app).post("/api/admins").send({
      name: "Test Admin",
      email: "testadmin@example.com",
      password: "testpassword",
      schoolName: "Test School",
    });

    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty("data");
    expect(res.body.data).toHaveProperty("id");
    createdAdminId = res.body.data.id; // Store the created admin's ID for further tests
  });

});
