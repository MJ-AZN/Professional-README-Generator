// TODO: Include packages needed for this application
const inquirer = require("inquirer")
const fs = require("fs")
const path = require("path")
const generateMarkdown = require("./utils/generateMarkdown")

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "Project name?"
    }, {
        type: "input",
        name: "description",
        message: "Project description?"
    }, {
        type: "checkbox",
        name: "license",
        message: "License selection?",
        choices: ["APACHE2.0", "Boost1.0", "BSD2", "BSD3", "MIT", "none"]
    }, {
        type: "input",
        name: "require",
        message: "Project dependancies?"
    }, {
        type: "input",
        name: "usage",
        message: "Technologies used in the making this Project?"
    }, {
        type: "input",
        name: "username",
        message: "Github username?"
    }, {
        type: "input",
        name: "name",
        message: "Full name?"
    }, {
        type: "input",
        name: "email",
        message: "Email address?"
    }, {
        type: "input",
        name: "contributors",
        message: "contributors??"
    }

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((responses) => {
        console.log("Creating README.md file...")
        writeToFile("./dist/README.md", generateMarkdown({...responses}))
    })
}

// Function call to initialize app
init();