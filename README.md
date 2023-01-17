# Poll Everywhere Take Home

## How to run project locally:
1. Open with code editor
2. Run npm i in entire project
3. cd into backend
4. Run npm i
5. Open postgres
6. Run following commands in terminal:
    nodemon 
    psql -U postgres -f db/schema.sql
    psql -U postgres -f db/seed.sql
7. cd into frontend
8. Run npm i
9. Run npm start in terminal
