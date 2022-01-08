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
            choices: ['isc', 'mit', 'bsd', 'apache'],
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
## Place Badge here
![PyPI license](https://img.shields.io/static/v1?label=license&message=${license}&color=green)
## Description
${description}

## Table of Contents
* [Instructions](#install-instructions)
* [Usage Guide](#usage)
* [License Info](#license)
* [Contributions Guide](#contributions)
* [Tests](#tests)
* [Questions?](#questions)


## Install Instructions
${instructions}

## Usage
${usage}

## License
To view information about the license in use please follow the link below:  
https://choosealicense.com/licenses/${license}/

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
