const dotenv = require("dotenv").config();
const createApp = require("./app");

const PORT = process.env.PORT || 5000;

const server = createApp();

server.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
