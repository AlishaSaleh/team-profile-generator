// External packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// Array of questions run by Inquirer
const questions = [
    {
        type: 'list',
        name: 'employeeType',
        message: 'What type of employee would you like to add?',
        choices: ['Manager','Engineer', 'Intern']
    }, {
        when: input => {
            return input.employeeType == 'Manager'
        },
        type: 'input',
        name: 'managerName',
        message: 'What is the name of the manager?'
    }, {
        when: input => {
            return input.employeeType == 'Manager'
        },
        type: 'input',
        name: 'managerID',
        message: 'What is the ID number of the manager?'
    }, {
        when: input => {
            return input.employeeType == 'Manager'
        },
        type: 'input',
        name: 'managerEmail',
        message: 'What is the email of the manager?'
    }, {
        when: input => {
            return input.employeeType == 'Manager'
        },
        type: 'input',
        name: 'managerOffice',
        message: 'What is the office number of the manager?'
    },
];

function init() {
    inquirer.prompt(questions)
};

init()