const fs = require('fs'); 
const inquirer = require('inquirer');

const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

const template = require('./src/template');

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
        const manager = new Manager (managerName.trim(), managerId.trim(), managerEmail.trim(), office.trim())
        fs.writeFile('./dist/output.html', template.starterHtml(), (error) => {
            if (error) {console.error(error)}
        })
        fs.appendFile('./dist/output.html', template.cardHtml(manager), (error) => {
            if (error) {console.error(error)}
        })
        
        if (menu === 'add engineer'){
            console.log(`---\nInformation for engineer:\n---`);
            addEngineer()
        } else if (menu === 'add intern'){
            console.log(`---\nInformation for intern:\n---`)
            addIntern()
        } else {
            console.log('Team added!')
            fs.appendFile('./dist/output.html', template.endHtml(), (error) => {
                if (error) {console.error(error)}
            })
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
        let engineer = new Engineer(engineerName.trim(), engineerId.trim(), engineerEmail.trim(), github.trim())
        fs.appendFile('./dist/output.html', template.cardHtml(engineer), (error) => {
            if (error) {console.error(error)}
        })
        if (menu === 'add engineer'){
            console.log(`---\nInformation for engineer:\n---`)
            addEngineer()
        } else if (menu === 'add intern'){
            console.log(`---\nInformation for intern:\n---`)
            addIntern()
        } else {
            console.log('Team added!')
            fs.appendFile('./dist/output.html', template.endHtml(), (error) => {
                if (error) {console.error(error)}
            })
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
        let intern = new Intern (internName.trim(), internId.trim(), internEmail.trim(), school.trim())
        fs.appendFile('./dist/output.html', template.cardHtml(intern), (error) => {
            if (error) {console.error(error)}
        })
        if (menu === 'add engineer'){
            console.log(`---\nInformation for engineer:\n---`)
            addEngineer()
        } else if (menu === 'add intern'){
            console.log(`---\nInformation for intern:\n---`)
            addIntern()
        } else {
            console.log('Team added!')
            fs.appendFile('./dist/output.html', template.endHtml(), (error) => {
                if (error) {console.error(error)}
            })
        }
    })
}
initialPrompt()
