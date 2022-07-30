const inquirer = require('inquirer');

const questions = [];

function init(data) {
    if (!data) {
      data = [];
    }
    return inquirer
      .prompt(questions)
      .then(answers => {
        data.push(answers);
        return data;
      });
}

init();