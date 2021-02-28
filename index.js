// External packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
// Internal packages
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// An array that holds the data from each function/Class
const finalTeam = [];

// A function to hold the menu questions
addTeamMenu = () => {
    inquirer.prompt(
        {
            type: 'list',
            name: 'addMember',
            message: 'Would you like to add more team members?',
            choices: ['Yes, an Engineer', 'Yes, an Intern', 'No, my team is complete']
        }
    ).then((response) => {
        if (response.addMember == 'Yes, an Engineer') {
            addEngineer();
        } else if (response.addMember == 'Yes, an Intern') {
            addIntern();
        } else {
            const html = generateHTML();
            fs.writeFile('./dist/team.html', html, err =>
                err ? console.log(err) : console.log('Success! Your HTML file has been generated!')
            );
            // console.log(finalTeam);
        }
    });
};

// A function to add Managers - runs first
addManager = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'managerName',
            message: 'What is the name of the manager?'
        }, {
            type: 'input',
            name: 'managerID',
            message: 'What is the ID number of the manager?'
        }, {
            type: 'input',
            name: 'managerEmail',
            message: 'What is the email of the manager?'
        }, {
            type: 'input',
            name: 'managerNum',
            message: 'What is the office number of the manager?'
        }
    ]).then((response) => {
        const nameMan = response.managerName;
        const idMan = response.managerID;
        const emailMan = response.managerEmail;
        const numMan = response.managerNum;
        const nuManager = new Manager(nameMan, idMan, emailMan, numMan);
        finalTeam.push(nuManager);
        addTeamMenu();
    });
};
// Function for questions to add employees
addEngineer = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the engineer?'
        }, {
            type: 'input',
            name: 'id',
            message: 'What is the ID number of the engineer?'
        }, {
            type: 'input',
            name: 'email',
            message: 'What is the email of the engineer?'
        }, {
            type: 'input',
            name: 'github',
            message: 'What is the GitHub username of the engineer?'
        }
    ]).then((response) => {
        // new Engineer
        const nameEng = response.name;
        const idEng = response.id;
        const emailEng = response.email;
        const githubEng = response.github;
        const nuEngineer = new Engineer(nameEng, idEng, emailEng, githubEng);
        finalTeam.push(nuEngineer);
        addTeamMenu();

    })
};

addIntern = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the intern?'
        }, {
            type: 'input',
            name: 'id',
            message: 'What is the ID number of the intern?'
        }, {
            type: 'input',
            name: 'email',
            message: 'What is the email of the intern?'
        }, {
            type: 'input',
            name: 'school',
            message: 'What is the school of the intern?'
        }
    ]).then((response) => {
        // new Intern
        const nameInt = response.name;
        const idInt = response.id;
        const emailInt = response.email;
        const schoolInt = response.school;
        const nuIntern = new Intern(nameInt, idInt, emailInt, schoolInt);
        finalTeam.push(nuIntern);
        addTeamMenu();
    });
}

generateHTML = () => {
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
    let htmlCARDS = addCards(finalTeam);

    htmlMain += htmlCARDS;

    let htmlBOTTOM = `</div>
  </section>
</body>
</html>`
    htmlMain += htmlBOTTOM;

    return htmlMain;
}

addCards = (data) => {
    const htmlArr = [];
    for (let i = 0; i < data.length; i++) {

        let modCard = `<div class="col-md-3">
    <div class="card bg-primary m-4">
        <div class="card-body">
            <div class="card-title text-white">
                <h3>${data[i].name}</h3>`
        if (data[i].officeNumber) {
            modCard += `
                    <h5>Manager</h5>
                    `
        }
        if (data[i].github) {
            modCard += `
                    <h5>Engineer</h5>
                    `
        }
        if (data[i].school) {
            modCard += `
                    <h5>Intern</h5>
                    `
        } modCard +=
            ` </div>
            <ul class="list-group">
                <li class="list-group-item">ID: ${data[i].id}</li>
                <li class="list-group-item">Email: <a href="mailto:${data[i].email}">${data[i].email}</a></li>
                `
        if (data[i].officeNumber) {
            modCard += `
                    <li class="list-group-item">Office: ${data[i].officeNumber} </li>
                    `
        }
        if (data[i].github) {
            modCard += `
                    <li class="list-group-item">GitHub: <a href="https://github.com/${data[i].github}">${data[i].github}</a></li>
                    `
        }
        if (data[i].school) {
            modCard += `
                    <li class="list-group-item">School: ${data[i].school}</li>
                    `
        }
        modCard += `</ul>
        </div>
    </div>
</div>`
        // push to array 
        htmlArr.push(modCard);
    }
    // console.log(htmlArr);
    // return joined array
    const htmlPlsWork = htmlArr.join("");
    return htmlPlsWork;
}

init = () => {
    // init() originally held multiple functions, now only calls 1 so could be removed
    addManager()
};

init();