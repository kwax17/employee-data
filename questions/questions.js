const inquirer = require('inquirer');
const db = require('../db/connection');

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
        if (data.question == "View All Departments") {
          viewDepartments();
        } else if (data.question == "View All Roles") {
          viewRoles();
        }else if (data.question == "View All Employees") {
          viewEmployees();
        } else if (data.question == "Add A Department") {
          addDepartments();
        } else if (data.question == "Add A Role") {
          addRoles();
        } else if (data.question == "Add An Employee") {
          // function
        } else if (data.question == "Update An Employee") {
          // function
        };
        // return data;
      });
};

function viewDepartments() {
  const command = "SELECT department.name AS departments FROM department;";
  db.query(command, (err, res) => {
    if (err) throw err;
    console.table(res);
    init();
  })
};

function viewRoles() {
  const command = "SELECT roles.title, roles.salary, department.name AS department FROM roles INNER JOIN department ON department.id = roles.department_id;";
  db.query(command, (err, res) => {
    if (err) throw err;
    console.table(res);
    init();
  })
};

function viewEmployees() {
  const command = "SELECT employees.first_name, employees.last_name, roles.title, roles.salary, department.name AS department, employees.manager_id" +
  "FROM employees " +
  "JOIN roles ON roles.id = employees.role_id " +
  "JOIN department ON roles.department_id = department.id " +
  "ORDER BY employees.id;";
  db.query(command, (err, res) => {
    if (err) throw err;
    console.table(res);
    init();
  })
};

function addDepartments() {
  const command = "SELECT department.name AS departments FROM department;";
  db.query(command, (err, res) => {
    if (err) throw err;
    console.table(res);
    const addPrompt = [
      {
        type: "input",
        name: "newDept",
        message: "New Department Name:"
      }
    ];
    inquirer.prompt(addPrompt)
    .then(answer => {
      console.log(answer);

      const command = "INSERT INTO department SET ?";

      db.query(command, {name: answer.newDept}, function(err, res){
        if (err) throw err;
        // console.table(res);
        init();
      });
    });
  }); 
};

function addRoles() {
  const commandA = "SELECT roles.title AS roles, roles.salary, department.name FROM roles INNER JOIN department ON department.id = roles.department_id;";
  const commandB = "SELECT department.name FROM department" ;
  db.query(commandA, (err, res) => {
    if (err) throw err;
    console.table(res);
    const departmentData = res
    db.query(commandB, (err, res) => {
      if (err) throw err;
        // prompt
        const addPrompt = [
          {
            type: "input",
            name: "newRole",
            message: "New Role Title:"
          },
          {
            type: "input",
            name: "newRoleSalary",
            message: "New Role Salary:"
          },
          {
            type: "list",
            name: "newRoleDept",
            message: "New Role Department:",
            choices: function() {
              departments = [];
              for(i = 0; i < departmentData.length; i++) { 
                const roleId = i + 1;
                departments.push(roleId + ": " + departmentData[i].name);
              };
              return departments;
            }
          }
        ];
        // ask prompt
        inquirer.prompt(addPrompt)
        .then(answer => {
          console.log(answer);

          const command = "INSERT INTO roles SET ?";

          db.query(command, {title: answer.newRole, salary: answer.newRoleSalary, department_id: parseInt(answer.newRoleDept.split(":")[0])}, function(err, res){
            if (err) throw err;
            // console.table(res);
            init();
          });
        });
    });
  }); 
};

function addEmployees() {
  const commandA = "SELECT title FROM employees"
  db.query(commandA, (err, res) => {
    if (err) throw err;
    console.table(res);
    const departmentData = res
    db.query(commandB, (err, res) => {
      if (err) throw err;
        // prompt
        const addPrompt = [
          {
            type: "input",
            name: "newRole",
            message: "New Role Title:"
          },
          {
            type: "input",
            name: "newRoleSalary",
            message: "New Role Salary:"
          },
          {
            type: "list",
            name: "newRoleDept",
            message: "New Role Department:",
            choices: function() {
              departments = [];
              for(i = 0; i < departmentData.length; i++) { 
                const roleId = i + 1;
                departments.push(roleId + ": " + departmentData[i].name);
              };
              return departments;
            }
          }
        ];
        // ask prompt
        inquirer.prompt(addPrompt)
        .then(answer => {
          console.log(answer);

          const command = "INSERT INTO roles SET ?";

          db.query(command, {title: answer.newRole, salary: answer.newRoleSalary, department_id: parseInt(answer.newRoleDept.split(":")[0])}, function(err, res){
            if (err) throw err;
            // console.table(res);
            init();
          });
        });
    });
  }); 
};

module.exports = {
  init
};