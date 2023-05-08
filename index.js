const express = require("express");
// Import and require mysql2
const mysql = require("mysql2");
const Prompt = require("./helpers/prompt.js");
const { Queries } = require("./helpers/queries.js");

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
    password: "",
    database: "work_db",
  },
  console.log(`Connected to the work_db database.`)
);

const userPrompt = new Prompt();

const init = async () => {
  const ans = await userPrompt.prompt();
switch (ans.option) {
  case "View All Departments":
    console.log("View All Departments");
    break;
  case "View All Roles":
    console.log("View All Roles");
    const newRoleQuery = new Queries(db);
    newRoleQuery.viewRoles();
    break;
  case "View All Employees":
    console.log("View All Employees");
    break;
  case "Add Department":
    console.log("Add Department");
    break;
  case "Add Role":
    console.log("Add Role");
    break;
  case "Add Employee":
    console.log("Add Employee");
    break;
  case "Update Employee Role":
    console.log("Update Employee Role");
    break;
  default:
    console.log("Invalid choice");
}
}

init();

module.exports = db;