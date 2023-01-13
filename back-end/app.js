// DEPENDENCIES
const cors = require("cors");
const express = require("express");
const rafflesController = require("./controllers/rafflesController");
const participantsController = require("./controllers/participantsController");

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json()); // Parse incoming JSON

// ROUTES
app.get("/", (req, res) => {
  res.send("Welcome to the Raffle App");
});

app.use("/raffles", rafflesController);

app.use("/participants", participantsController);

app.get("*", (req, res) => {
  res.send("page not found");
});

// EXPORT
module.exports = app;
