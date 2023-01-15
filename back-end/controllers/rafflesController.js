const express = require("express");
const db = require("../db/dbConfig");
const raffles = express.Router();
const {
  getAllRaffles,
  getOneRaffle,
  createRaffle,
  createEntry,
} = require("../queries/raffles");

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

raffles.post("/", async (req, res) => {
  const newRaffle = await createRaffle(req.body);
  if (newRaffle) {
    res.status(200).json(newRaffle);
  } else {
    res.status(400).json({ error: error });
  }
});

raffles.get("/:raffle_id/participants", async (req, res) => {
  const { raffle_id, participant_id } = req.params;
  try {
    const entries = await getEntries(raffle_id, participant_id);
    if (entries[0]) {
      res.status(200).json(entries);
    }
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

raffles.post("/:raffle_id/participants", async (req, res) => {
  const newEntry = await createEntry(req.body);
  if (newEntry) {
    res.status(200).json(newEntry);
  } else {
    res.status(400).json({ error: error });
  }
});

raffles.put("/:raffle_id/winner", async (req, res) => {});

raffles.get("/:raffle_id/winner", async (req, res) => {});

module.exports = raffles;
