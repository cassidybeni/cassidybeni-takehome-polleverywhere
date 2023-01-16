DROP DATABASE IF EXISTS takehome_dev;
CREATE DATABASE takehome_dev;

\c takehome_dev;

DROP TABLE IF EXISTS raffles;
CREATE TABLE raffles (
    raffle_id SERIAL PRIMARY KEY,
    raffle_name TEXT NOT NULL,
    secret_token TEXT NOT NULL
);

DROP TABLE IF EXISTS participants;
CREATE TABLE participants (
    participant_id SERIAL PRIMARY KEY,
    raffle_id SERIAL, CONSTRAINT fk_raffle_entry FOREIGN KEY(raffle_id) REFERENCES raffles(raffle_id) ON DELETE CASCADE,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    email TEXT NOT NULL
);
