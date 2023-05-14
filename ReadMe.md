[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/mit)

# Erik’s Employee Tracker

## Description

This application is a command-line app that allows users to select from 7 prompts:

- View all departments: Get SQL Statement that queries department table for all departments
- View all roles: Get SQL Statement that queries role table for all roles
- View all employees: Get SQL Statement that queries employee table for all employees
- Add a department: Insert SQL Statement that adds department to deparment table
- Add a role: Insert SQL Statement that adds role to role table
- Add an employee: Insert SQL Statement that adds employee to employee table
- Update an employee role: Set SQL Statement that updates existing employee's role in employee table

AS A business owner
I WANT to be able to view and manage the departments, roles, and employees in my company
SO THAT I can organize and plan my business

## Table of Contents

- [Story](#story)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Story

> GIVEN a command-line application that accepts user input

> WHEN I start the application
> THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role

> WHEN I choose to view all departments
> THEN I am presented with a formatted table showing department names and department ids

> WHEN I choose to view all roles
> THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role

> WHEN I choose to view all employees
> THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to

> WHEN I choose to add a department
> THEN I am prompted to enter the name of the department and that department is added to the database

> WHEN I choose to add a role
> THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database

> WHEN I choose to add an employee
> THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database

> WHEN I choose to update an employee role
> THEN I am prompted to select an employee to update and their new role and this information is updated in the database

## Installation

npm (inquirer), node, mysql2

## Usage

Accessible via Github (see link below). Open up a new terminal and run "node index.js" to start program. You'll need to exit as program runs recursively.
## License

Erik's-Employee-Tracker is licensed under [MIT](https://opensource.org/licenses/mit).

## Contributing

No contributors (aside from author)

## Tests

No tests

## Screenshots
No Screenshots -- See link at bottom for walkthrough of application

## Questions

Link to [Employee Tracker Assignment](https://github.com/erikchiodo/eriks-employee-tracker)

Link to [Demo] (https://drive.google.com/file/d/1fMGY5W93HtbufvE7C0NSYDOa-kdjDMwq/view)

If you need to contact me directly, here's my email: erikchiodo@gmail.com!