# Poll Everywhere Take Home

## How to run project locally:
1. Clone project
2. Open with code editor
3. Run npm i in entire project
4. cd into backend
5. Run npm i
- `touch .env` and copy & paste code below in env file
```
PORT=3333
PG_HOST=localhost
PG_PORT=5432
PG_DATABASE=takehome_dev
PG_USER=postgres
PG_PASSWORD=""
```
 - Run psql -U postgres -f db/schema.sql
 - Run psql -U postgres -f db/seed.sql
6. Open postgres
7. cd into frontend
8. Run npm i
9. Run npm start
