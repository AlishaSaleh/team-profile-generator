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
                .then((response) => {
                    if (response.moreMembers == 'yes') {
                        addEmployee();
                    } else {
                        const html = generateHTML(response);
                        fs.writeFile('team.html', html, err =>
                            err ? console.log(err) : console.log('Success! Your HTML file has been generated!')
                        );

                        // console.log('Ready for HTML!');
                    }
                })
        })
};

generateHTML = (response) => {
    let htmlMain = `<!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Team Profile</title>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
          integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
  </head>
  
  <body>
      <nav class="navbar navbar-light bg-info">
          <span class="navbar-brand mx-auto">
              <h1 class="text-white">Team Profile</h1>
          </span>
      </nav>
      <br>
      <br>
      <section>
          <div class="row d-flex justify-content-center">`
    let htmlCARDS = addCards();

    htmlMain += htmlCARDS;
    
    let htmlBOTTOM = `</div>
  </section>
</body>
</html>`
    htmlMain += htmlBOTTOM;

    return htmlMain;
}

addCards = () => {
    return `<div class="col-md-3">
    <div class="card bg-primary mx-4">
        <div class="card-body">
            <div class="card-title text-white">
                <h3>person 1</h3>
                <h5>Manager</h5>
            </div>
            <ul class="list-group">
                <li class="list-group-item">Cras justo odio</li>
                <li class="list-group-item">Dapibus ac facilisis in</li>
                <li class="list-group-item">Morbi leo risus</li>
            </ul>
        </div>
    </div>
</div>`
}

init = () => {
    addEmployee()
};

init()