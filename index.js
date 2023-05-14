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
const userQuery = new Queries(db)

const init = async () => {
  const ans = await userPrompt.prompt();
  switch (ans.option) {
    case "View All Departments":
      userQuery.viewAllDepartments();
      break;
    case "View All Roles":
      userQuery.viewAllRoles();
      break;
    case "View All Employees":
      userQuery.viewAllEmployees();
      break;
    case "Add Department":
      const departmentAnswers = await userPrompt.addDepartmentPrompt();
      userQuery.addDepartment(departmentAnswers);
      userQuery.viewAllDepartments();
      break;
    case "Add Role":
      const departmentChoices = await userQuery.getDepartmentChoices();
      const roleAnswers = await userPrompt.addRolePrompt(departmentChoices);
      userQuery.addRole(roleAnswers);
      userQuery.viewAllRoles();
      break;
    case "Add Employee":
      const roleChoices = await userQuery.getRoleChoices();
      const managerChoices = await userQuery.getManagerChoices();
      const employeeAnswers = await userPrompt.addEmployeePrompt(roleChoices, managerChoices);
      userQuery.addEmployee(employeeAnswers);
      userQuery.viewAllEmployees();
      break;

    // Review
    case "Update Employee Role":
      const employeeNames = await userQuery.getEmployeeNames();
      const employeeRoleChoices = await userQuery.getRoleChoices();
      const updateEmployeeAnswers = await userPrompt.updateEmployeePrompt(employeeNames, employeeRoleChoices);
      userQuery.updateEmployee(updateEmployeeAnswers);
      userQuery.viewAllEmployees();
      break;
    default:
      console.log("Good bye!");
      process.exit(0);
      return;
  }
  init();
};

init()

module.exports = db;
