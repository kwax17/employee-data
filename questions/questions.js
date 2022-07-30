const inquirer = require('inquirer');
const Connection = require('mysql2/typings/mysql/lib/Connection');

const options = [
  {
    type: 'list',
    name: 'question',
    message: 'What would you like to do?',
    choices: ["View All Departments", "View All Roles", "View All Employees", "Add A Department", "Add A Role", "Add An Employee", "Update An Employee"]
  },
];

function init() {
    return inquirer
    .prompt(options)
      .then(data => {
        if (data.action == "View All Departments") {
          viewDepartment();
        } else if (data.action == "View All Roles") {
          viewRole();
        }else if (data.action == "View All Employees") {
          viewEmployee();
        } else if (data.action == "Add A Department") {
          // function
        } else if (data.action == "Add A Role") {
          // function
        } else if (data.action == "Add An Employee") {
          // function
        } else if (data.action == "Update An Employee") {
          // function
        };
        // return data;
      });
};

function viewDepartment() {
  const command = "SELECT department.dept_name AS departments FROM department;";
  Connection.command(command, (err, res) => {
    if (err) throw err;
    console.table(res);
    init();
  })
};

function viewRole() {
  const command = "SELECT roles.title, roles.salary, department.dept_name AS department FROM roles INNER JOIN department ON department.id = roles.department_id;";
  Connection.command(command, (err, res) => {
    if (err) throw err;
    console.table(res);
    init();
  })
};

function viewEmployee() {
  const command = "SELECT employees.first_name, employees.last_name, roles.title, roles.salary, department.dept_name AS department, employees.manager_id " +
  "FROM employees " +
  "JOIN roles ON roles.id = employees.role_id " +
  "JOIN department ON roles.department_id = department.id " +
  "ORDER BY employees.id;";
  Connection.command(command, (err, res) => {
    if (err) throw err;
    console.table(res);
    init();
  })
};

module.exports = {
  init
};