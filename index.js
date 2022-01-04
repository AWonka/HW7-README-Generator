const fs = require('fs');
const inquirer = require('inquirer');

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            message: 'What is your Project title?',
            name: 'title',
        },
        {
            type: 'input',
            message: 'Describe your Project!',
            name: 'description',
        },
        {
            type: 'input',
            message: 'Describe the installation instructions!',
            name: 'instructions',
        },
        {
            type: 'input',
            message: 'Describe how to use this application!',
            name: 'usage',
        },
        {
            type: 'list',
            message: 'Which license is this application covered under?',
            name: 'license',
            choices: ['ISC', 'MIT', 'BSD', 'APACHE 2', 'GPL'],
        },
        {
            type: 'input',
            message: 'Describe how somebody can make contributions to this project!',
            name: 'contributions',
        },
        {
            type: 'input',
            message: 'Describe how you ran tests on this application!',
            name: 'tests',
        },
        {
            type: 'input',
            message: 'Please enter your email address for people to reach out to you with additional questions!',
            name: 'email',
        },
        {
            type: 'input',
            message: 'Please enter your github username so we can link your github profile!',
            name: 'git',
        },
    ])
}

const generateREADME = ({ title, description, instructions, usage, license, contributions, tests, email, git }) => 
`# ${title}
## Place Badge Here
## Description
${description}

## Table of Contents

## Install Instructions
${instructions}

## Usage
${usage}

## License
${license}

## Contributions
${contributions}

## Tests
${tests}

## Questions
If you have any additional questions please feel free to contact me at my email below:  
${email}  
Below is a link to my github profile:  
[github.com/${git}](https://github.com/${git})`;

const init = () => {
    promptUser()
    .then((answers) => fs.writeFileSync('generatedREADME.md', generateREADME(answers)))
    .then(() => console.log('Successfully Generated readme!'))
    .catch((err) => console.error(err));
};

init();
