const inquirer = require('inquirer');

function init() {
    return inquirer
      .prompt("What do you want to do?")
      .then(data => {
        return data;
      });
}

init();