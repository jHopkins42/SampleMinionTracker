const mysql = require("mysql2");
const express = require('express')
require('dotenv').config()

// database connection
const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const db = mysql.createConnection(
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
  },
  console.log("Connected to the company database.")
);

/*
db.query(`DELETE FROM course_names WHERE id = ?`, 3, (err, result) => {
    if (err) {
      console.log(err);
    }
    console.log(result);
  });
  
  db.query('SELECT * FROM course_names', function (err, results) {
    console.log(results);
  });
  
  app.get('/api', (req, res) => {
      const sql = SELECT id, movie_name AS title FROM movies';
      db.query
  });
  
  app.post('/api/new-movie', ({ body }, res) =>{
      const sql = 'INSERT INTO movies (movie_name)
      VALUES (?)'
  })
  
  app.use((req, res) => {
    res.status(404).end();
  });
  
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
*/  

module.exports = db;