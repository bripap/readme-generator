// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
function userInput() {
    return inquirer.prompt([
    {
        name: 'license',
        message: 'What kind of license for this application?',
        type: 'list',
        choices: ["Academic Free License v3.0", "Educational Community License v2.0", "ISC", "Microsoft Public License", "Mozilla Public License 2.0", "Open Software License 3.0", ]
    },
    {
        name: 'title',
        message: 'What is the title of this application?',
        type: 'input'
    },
    {
        name: 'description',
        message: 'What does this application do?',
        type: 'input'
    },
    {
        name: 'install',
        message: 'How do I install this application?',
        type: 'input'
    },
    {
        name: 'usage',
        message: 'How do I use this application?',
        type: 'input'
    },
    {
        name: 'contributing',
        message: 'How do I contribute to this application?',
        type: 'input'
    },
    {
        name: 'testing',
        message: 'How do I test this application?',
        type: 'input'
    },
    {
        name: 'username',
        message: 'What is your Github username?',
        type: 'input'
    },
    {
        name: 'email',
        message: 'What is your e-mail?',
        type: 'input'
    },
    {
        name: 'fileName',
        message: 'What do you want to call this readme?',
        type: 'input'
    },
])};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.appendFile(`${fileName}.md`, data, 
    (err) => err ? console.error(err) : console.log(`${fileName}.md has been generated.`))
}

// TODO: Create a function to initialize app
async function init() {
    let answers = await userInput();
    writeToFile((answers.fileName),(generateMarkdown(answers)));
}

// Function call to initialize app
init();