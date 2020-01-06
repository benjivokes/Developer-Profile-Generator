const inquirer = require('inquirer');

function getUserInput() {
    inquirer.prompt([
        {
            type: 'input',
            message: 'Enter github username',
        },
        {
            type: 'list',
            message: 'What is you favorite color?',
            choices: [
                {
                    name: '70s poop yellow',
                    value: '70s poop yellow'
                },
                {
                    name: 'Blue',
                    value: 'blue'
                },
                {
                    name: 'Pepto Pink',
                    value: 'pink'
                },
            ]
        }
    ])
}