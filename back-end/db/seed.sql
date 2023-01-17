\c takehome_dev;

INSERT INTO raffles (raffle_name, secret_token, winner_id) VALUES
('Sample Raffle', 'nje234', 1),
('Jovanny''s Raffle', 'xmdf234', 3),
('Cali''s Raffle', 'ndow3', null);

INSERT INTO participants (first_name, last_name, email, raffle_id) VALUES
('Leonie', 'Wolf', 'Jazmyne.Hegmann96@gmail.com', 1),
('Consuelo', 'Turner', 'Federico.Willms51@yahoo.com', 2),
('Wyman', 'Connelly', 'Raquel37@gmail.com', 3);

INSERT INTO winners (winner_name, email, raffle_ticket, raffle_id) VALUES
('Leonie Wolf', 'Jazmyne.Hegmann96@gmail.com', 23, 1),
('Consuelo Turner', 'Federico.Willms51@yahoo.com', 54, 3);