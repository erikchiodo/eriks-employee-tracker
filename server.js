const express = require("express");
// Import and require mysql2
const mysql = require("mysql2");
const prompt = require("./helpers/prompt.js");
const queries = require("./helpers/queries.js");

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const db = mysql.createConnection(
  {
    host: "127.0.0.1",
    // MySQL Username
    user: "root",
    // TODO: Add MySQL Password
    password: "",
    database: "work_db",
  },
  console.log(`Connected to the work_db database.`)
);

app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = db;