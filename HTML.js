const fs = require('fs');
const util = require('util');

const writeFilePromise = util.promisify(fs.writeFile);

const generateFileName = function() {
    return `${(new Date).getTime()}.html`;
}

const gen = async function(username, color) {
    const htmlString = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>${username}</title>
        </head>
        <body>
            <h1>Hi, my name is ${username}. My favorite color is ${color}</h1>
        </body>
        </html>
    `;

    await writeFilePromise(generateFileName, htmlString);
}

module.exports = {
    gen,
}