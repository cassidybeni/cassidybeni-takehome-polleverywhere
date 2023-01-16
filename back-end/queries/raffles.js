const db = require("../db/dbConfig.js");
const pgp = require("pg-promise")();

//INDEX
const getAllRaffles = async () => {
  try {
    const allRaffles = db.any("SELECT * FROM raffles");
    return allRaffles;
  } catch (error) {
    return error;
  }
};

//SHOW
const getOneRaffle = async (raffle_id) => {
  try {
    const oneRaffle = db.one(
      "SELECT * FROM raffles WHERE raffle_id=$1",
      raffle_id
    );
    return oneRaffle;
  } catch (error) {
    return error;
  }
};

//CREATE
const createRaffle = async (raffle) => {
  try {
    const newRaffle = await db.one(
      "INSERT INTO raffles (raffle_id, raffle_name, secret_token) VALUES ($1, $2, $3) RETURNING *",
      [raffle.raffle_id, raffle.raffle_name, raffle.secret_token]
    );
    return newRaffle;
  } catch (error) {
    return error;
  }
};

const getAllEntries = async (raffle_id) => {
  try {
    const allEntries = await db.any(
      "SELECT * FROM participants WHERE raffle_id=$1",
      raffle_id
    );
    return allEntries;
  } catch (error) {
    return error;
  }
};

const createEntry = async (raffle_id) => {
  try {
    const newEntry = await db.one(
      "INSERT INTO raffles (participant_id, first_name, last_name, email, raffle_id) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [
        participant.participant_id,
        participant.first_name,
        participant.last_name,
        participant.email,
        raffle_id,
      ]
    );
    return newEntry;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllRaffles,
  getOneRaffle,
  createRaffle,
  getAllEntries,
  createEntry,
};
