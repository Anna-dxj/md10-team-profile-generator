const fs = require('fs'); 
const inquirer = require('inquirer');
//add manager, engineer, intern modules
const manager = require('./lib/manager');
const engineer = require('./lib/engineer');
const intern = require('./lib/intern');
//add template.js

function initialPrompt () {
    const managerQuestions = [
        {name: 'managerName', 
        type: 'input', 
        message: `---\nInformation for project manager\n---\nWhat is the manager's name?`},
        {name: 'managerId',
        type: 'input',
        message: `What is the manager's employee ID?`}, 
        {name: 'managerEmail', 
        type: 'email',
        message: `What is the manager's email address?`},
        {name: 'office',
        type: 'input',
        message: `What is the manager's office number?`},
        {name: 'menu',
        type: 'list',
        message: `---\nMENU\n---\nWould you like to`,
        choices: ['add engineer', 'add intern', 'finish building team']}
    ]
    inquirer.prompt(managerQuestions).then((response) => {
        const {managerName, managerId, managerEmail, office, menu} = response
        const manager = new Manager (managerName, managerId, managerEmail, office)
        addHtml(manager)
        
        if (menu === 'add engineer'){
            console.log(`---\nInformation for intern:\n---`);
            addEngineer();
        } else if (menu === 'add intern'){
            console.log(`---\nInformation for intern:\n---`)
            addIntern()
        } else {
            console.log('All members have been added!');
        }
    })
}

function addEngineer(){
    const engineerQuestions = [
        {name: 'engineerName', 
        type: 'input', 
        message: `What is the engineer's name?`},
        {name: 'engineerId',
        type: 'input',
        message: `What is the engineer's employee ID?`}, 
        {name: 'engineerEmail', 
        type: 'email',
        message: `What is the engineer's email address?`},
        {name: 'github',
        type: 'input',
        message: `What is the engineer's github username?`},
        {name: 'menu',
        type: 'list',
        message: `---\nMENU\n---\nWould you like to`,
        choices: ['add engineer', 'add intern', 'finish building team']}
    ]
    inquirer.prompt(engineerQuestions).then((response) => {
        const {engineerName, engineerId, engineerEmail, github, menu} = response
        let engineer = new Engineer(engineerName, engineerId, engineerEmail, github)
        addHtml(engineer);
        if (menu === 'add engineer'){
            console.log(`---\nInformation for engineer:\n---`)
            addEngineer()
        } else if (menu === 'add intern'){
            console.log(`---\nInformation for intern:\n---`)
            addIntern()
        } else {
            console.log('All members have been added')
        }
    })
}
function addIntern(){
    const internQuestions = [
        {name: 'internName', 
        type: 'input', 
        message: `What is the intern's name?`},
        {name: 'internId',
        type: 'input',
        message: `What is the intern's employee ID?`}, 
        {name: 'internEmail', 
        type: 'email',
        message: `What is the intern's email address?`},
        {name: 'school',
        type: 'input',
        message: `What is the intern's school?`},
        {name: 'menu',
        type: 'list',
        message: `---\nMENU\n---\nWould you like to`,
        choices: ['add engineer', 'add intern', 'finish building team']}
    ]
    inquirer.prompt(internQuestions).then((response) => {
        const {internName, internId, internEmail, school, menu} = response
        let intern = new Intern (internName, internId, internEmail, school)
        addHtml(intern)
        if (menu === 'add engineer'){
            console.log(`---\nInformation for engineer:\n---`)
            addEngineer()
        } else if (menu === 'add intern'){
            console.log(`---\nInformation for intern:\n---`)
            addIntern()
        } else {
            console.log('---\nAll members have been added!---\n')
        }
    })
}
function addHtml(position){
    if (position === 'manager'){
        
    } else if (position ===  'engineer'){

    } else if (position === 'intern'){

    }
}
initialPrompt()
