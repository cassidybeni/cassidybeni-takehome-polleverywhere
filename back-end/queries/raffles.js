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

module.exports = {
  getAllRaffles,
  getOneRaffle,
  createRaffle,
};
