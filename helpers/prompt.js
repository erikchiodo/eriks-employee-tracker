const inquirer = require("inquirer");

class Prompt {
  constructor() {
    this.options = [
      { name: "View all departments", value: "View All Departments" },
      { name: "View all roles", value: "View All Roles" },
      { name: "View all employees", value: "View All Employees" },
      { name: "Add a department", value: "Add Department" },
      { name: "Add a role", value: "Add Role" },
      { name: "Add an employee", value: "Add Employee" },
      { name: "Update an employee role", value: "Update Employee Role" },
    ];
  }

  prompt() {
    return inquirer.prompt({
      name: "option",
      type: "list",
      message: "What would you like to do?",
      choices: this.options,
    });
  }
  addDepartmentPrompt() {
    return inquirer.prompt({
      name: "text",
      type: "input",
      message: "What is the name of the department?",
    });
  }
}
module.exports = Prompt;