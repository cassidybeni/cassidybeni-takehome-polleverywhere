const express = require("express");
const raffles = express.Router();
const { getAllRaffles } = require("../queries/raffles");

raffles.get("/", async (req, res) => {
  const allRaffles = await getAllRaffles();
  if (allRaffles[0]) {
    res.status(200).json(allRaffles);
  } else {
    res.status(500).json({ error: "server error" });
  }
});

module.exports = raffles;
