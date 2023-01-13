DROP DATABASE IF EXISTS takehome_dev;
CREATE DATABASE takehome_dev;

\c takehome_dev;

DROP TABLE IF EXISTS participants;
CREATE TABLE participants (
    id SERIAL PRIMARY KEY,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT
);

DROP TABLE IF EXISTS raffles;
CREATE TABLE raffles (
    id SERIAL PRIMARY KEY,
    raffle_name TEXT NOT NULL,
    created_on TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    raffled_on TIMESTAMP,
    secret_token TEXT
);