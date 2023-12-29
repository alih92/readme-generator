const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
  {
    type: 'input',
    name: 'username',
    message: 'What is your GitHub username?'
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address?'
  },
  {
    type: 'input',
    name: 'title',
    message: 'What is your project name?'
  },
  {
    type: 'input',
    name: 'description',
    message: 'Please write a short description of your project'
  },
  {
    type: 'list',
    name: 'license',
    message: 'What kind of license should your project have?',
    choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None']
  },
  {
    type: 'input',
    name: 'installation',
    message: 'What commands should be run to install dependencies?',
    default: 'npm i'
  },
  {
    type: 'input',
    name: 'tests',
    message: 'What commands should be run to run tests?',
    default: 'npm test'
  },
  {
    type: 'input',
    name: 'Repo',
    message:'What does the user need to know about using the repo?'
  },
  {
    type: 'input',
    name: 'Contribution',
    message:'What does the user need to know about contributing to the repo?'
  }

];

// function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => err ? console.log(err) :
  console.log('Success! Generating ReadMe'));
}

// function to initialize program
function init() {
  inquirer.prompt(questions).then((data) => {
    const markdownFile = generateMarkdown(data);
    writeToFile('README.md', markdownFile);
  })
}

// function call to initialize program
init();
