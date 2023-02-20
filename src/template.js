const Manager = require('../lib/manager');
const Engineer = require('../lib/engineer');
const Intern = require('../lib/intern');

const cardHtml = (employee) => {
    let cardTxt = '';
    if (employee.getRole() === 'Manager'){
        cardTxt = `
        <div class="card col-3 mx-1 my-2 shadow-sm">
            <div class="card-header custom-card-head">
                <h2 class="card-title">${employee.getName()}</h2>
                <h3><i class="fa-solid fa-mug-hot"></i> Manager</h3>
            </div>
            <div class="card-body bg-light">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${employee.getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></li>
                    <li class="list-group-item">Office: ${employee.getOffice()}</li>
                </ul>
            </div>
        </div>`
    }
    else if (employee.getRole() === 'Engineer'){
        cardTxt = `
        <div class = "card col-3 mx-1 my-2 shadow-sm">
            <div class="card-header custom-card-head">
                <h2 class="card-title">${employee.getName()}</h2>
                <h3><i class="fa-solid fa-glasses"></i> Engineer</h3>
            </div>
            <div class="card-body bg-light">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${employee.getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></li>
                    <li class="list-group-item">Github: <a href="https://github.com/${employee.getGithub()}" target="_blank" rel="noreferrer">${employee.getGithub()}</a></li>
                </ul>
            </div>
        </div>`
    }
    else if (employee.getRole() === 'Intern'){
        cardTxt = `
        <div class="card col-3 mx-1 my-2 shadow-sm">
            <div class="card-header custom-card-head">
                <h2 class="card-title">${employee.getName()}</h2>
                <h3><i class="fa-solid fa-graduation-cap"></i> Intern</h3>
            </div>
            <div class="card-body bg-light">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${employee.getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></li>
                    <li class="list-group-item">School: ${employee.getSchool()}</li>
                </ul>
            </div>
        </div>`
    }
    return cardTxt
}
const starterHtml = () => {
    const startHtmlTxt = `
    <!DOCTYPE html>
        <html>
            <head>
                <title>Team Profile</title>
                <meta charset="UTF-8"/>
                <meta name="viewport" content="width=device-width, initial-sclae=1"/>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
                <link rel="stylesheet" href="./style.css">
                <script src="https://kit.fontawesome.com/f4ac780dae.js" crossorigin="anonymous"></script>
            </head>
            <body class="row">
                <nav class="container text-center p-3 custom-nav">
                    <h1 class="col align-self-center">My Team</h1>
                </nav>
                <main class="col d-flex flex-row justify-content-center m-1 flex-wrap">`

    return startHtmlTxt

}

const  endHtml = () => {
    const endHtmlTxt = `
            <script src="./script.js"></script>
            </main>
        </body>
    </html>`

    return endHtmlTxt
}

module.exports = {cardHtml, starterHtml, endHtml};