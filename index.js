const inquirer = require('inquirer');

const { gen } = require('./HTML');

function getUserInput() {
    return inquirer.prompt([
        {
            type: 'input',
            message: 'Enter Github Username',
            name:'username',
        },
        {
            type: 'list',
            message: 'What is you favorite color?',
            name: 'color',
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

async function main() {
const { username, color } = await getUserInput();
gen(username, color);
}

main();