const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const render = require('./src/page-template')
const inquirer = require('inquirer');
const fs = require('fs');

const teamMembers = {
    manager: null,
    eningeers: [],
    interns: [],
};
const idArray = []

function createManager() {
    inquirer.prompt([
        {
            type: "input",
            name: "managerName",
            validate: (answer) => {
                if (answer !== "") {
                    return true
                }
                return "Please enter at least one character";
            },
        },
        {
            type: "input",
            name: "managerId",
            message: "What is the team manager's id",
            validate: (answer) => {
                const pass = answer.match(/^[1-9]\d*$/)
                if (pass) {
                    return true
                }
                return "Please enter a positive number greater than 0"
            }
        },
    ]);
}

function buildTeam() {
    fs.writeFile("/dist/team.html", render(teamMembers), (err) => {
        if (err) {
            console.log(err)
        }
    })
}

buildTeam();