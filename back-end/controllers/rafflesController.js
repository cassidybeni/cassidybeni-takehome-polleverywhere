const express = require("express");
const db = require("../db/dbConfig");
const raffles = express.Router();
const { getAllRaffles, getOneRaffle } = require("../queries/raffles");

raffles.get("/", async (req, res) => {
  const allRaffles = await getAllRaffles();
  if (allRaffles[0]) {
    res.status(200).json(allRaffles);
  } else {
    res.status(500).json({ error: "server error" });
  }
});

raffles.get("/:raffle_id", async (req, res) => {
  const { raffle_id } = req.params;
  const oneRaffle = await getOneRaffle(raffle_id);
  if (oneRaffle) {
    res.status(200).json(oneRaffle);
  } else {
    res.status(404).json({ error: "Raffle not found" });
  }
});

module.exports = raffles;
