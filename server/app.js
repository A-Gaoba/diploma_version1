const express = require("express");
const adminRoutes = require("./src/routes/adminRoutes");
const authRoutes = require("./src/routes/authRoutes");
const classRoutes = require("./src/routes/classRoutes");
const { authenticateToken } = require("./src/middleware/authMiddleware");
const cors = require("cors")

const swagger = require("./docs/swagger");
const app = express();

function createApp() {
  app.use(cors())
  app.use(express.json());
  app.use(express.urlencoded());

  app.use("/", authRoutes);
  app.use("/", adminRoutes);
  app.use("/", classRoutes);

  // Protected route example
  app.get("/api/protected", authenticateToken, (req, res) => {
    res.json({ message: "Protected route accessed!" });
  });

  app.get("/", (req, res) => {
    res.send("Welcome to the API");
  });

  // Error handling middleware
  app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("Something broke!");
  });

  swagger(app);
  return app;
}

module.exports = createApp;
