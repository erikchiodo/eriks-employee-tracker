const db = require("../server.js");

// TODO Create queries based on user input
// db.query(
//   "SELECT COUNT(id) AS total_count FROM favorite_books GROUP BY in_stock",
//   function (err, results) {
//     console.log(results);
//   }
// );

// TODO: View All Roles. Left join department on role (display: id, title, department, salary)
// TODO: View All Employees. Left join department and role on employee (display: id, first_name, last_name, title, department, salary, manager)
// TODO: View All Departments. Display Name and ID
// TODO: Add Department. Prompt user to add department
// TODO: Add Role. Prompt user to provide name of role, salary of role, and department role belongs to (choice)
// TODO: Add Employee. Prompt user to provide first name, last name, employee's role (choice), manager (choice)
// TODO: Update an Employee Role. Prompt user to provide id of employee, role change (set/where).