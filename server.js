// server.js
require("dotenv").config(); // Load environment variables

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

const routers = require("./api/routes/index");

// CORS middleware setup (allow all for now, customize as needed)
app.use(cors());

// Body parser setup
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api", routers);
app.get("/", (req, res) => {
  res.json({ message: "Welcome to the backend API!" });
});

// Import routes (example)
// const userRoutes = require('./routes/user.routes');
// app.use('/api/users', userRoutes);

// Port setup
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
