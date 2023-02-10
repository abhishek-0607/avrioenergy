const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
app.use(express.json());

app.use(bodyparser.json());
app.use(cors());
app.use("/api", authRoutes);
app.use("/api/users", userRoutes);

module.exports = app;
