const db = require("../index.js");

class Queries {
  constructor(db) {
    this.db = db;
  }

  // TODO: View All Roles. Left join department on role (display: id, title, department, salary)
  viewAllRoles() {
    this.db.query("SELECT id, title, salary, department_id FROM role",
      (err, res) => {
        if (err) throw err;
        console.log(res);
      }
    );
  }
  // TODO: View All Employees. Left join department and role on employee (display: id, first_name, last_name, title, department, salary, manager)
  viewAllEmployees() {
    this.db.query("SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name, role.salary, employee.manager_id FROM employee LEFT JOIN role ON employee.role_id = role.id LEFT JOIN department ON role.department_id = department.id", function (err, results) {
      if (err) throw err;
      console.log(results);
    });
  }

  // TODO: View All Departments. Display Name and ID
  viewAllDepartments() {
    this.db.query("SELECT id, name FROM department", function (err, results) {
      console.log(results);
    });
  }

  // TODO: Add Department. Prompt user to add department

  // TODO: Add Role. Prompt user to provide name of role, salary of role, and department role belongs to (choice)

  // TODO: Add Employee. Prompt user to provide first name, last name, employee's role (choice), manager (choice)

  // TODO: Update an Employee Role. Prompt user to provide id of employee, role change (set/where).
}

module.exports = { Queries }

// TODO Create queries based on user input
// db.query(
//   "SELECT COUNT(id) AS total_count FROM favorite_books GROUP BY in_stock",
//   function (err, results) {
//     console.log(results);
//   }
// );

