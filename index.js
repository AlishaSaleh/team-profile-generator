// External packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// Function for questions to add employees
addEmployee = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the employee?'
        }, {
            type: 'input',
            name: 'id',
            message: 'What is the ID number of the employee?'
        }, {
            type: 'input',
            name: 'email',
            message: 'What is the email of the employee?'
        },
        {
            type: 'list',
            name: 'employeeRole',
            message: 'What is the role of the employee?',
            choices: ['Manager', 'Engineer', 'Intern']
        }
    ])
        .then((response) => {
            let roleSpec;
            if (response.employeeRole == 'Manager') {
                roleSpec = 'office number';
            } else if (response.employeeRole == 'Engineer') {
                roleSpec = 'GitHub username';
            } else {
                roleSpec = 'school name';
            }
            inquirer.prompt([
                {
                    type: 'input',
                    name: 'roleSpec',
                    message: `What is the team member's ${roleSpec}?`
                }, {
                    type: "list",
                    name: "moreMembers",
                    message: "Would you like to add more team members?",
                    choices: ["yes", "no"],
                }
            ])
                .then((response2) => {
                    if (response2.moreMembers == 'yes') {
                        addEmployee();
                    } else {
                        console.log('Ready for HTML!');
                    }
                })
        })
};


init = () => {
    addEmployee()
};

init()