const express = require("express");
const raffles = express.Router();

const { getAllRaffles } = require("../queries/raffles");
