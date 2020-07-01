var readline = require('readline')
var r1 = readline.createInterface( { input: process.stdin, output: process.stdout});
r1.question(" ", (value) => {
 checkValidNumber (value); r1.question(" ", ( elem) => { console.log("::Values :::"+value+":::"+elem); r1.close(); }); });
function checkValidNumber(value) { value = Number(value); if (Number.isNaN(value)) { throw new Error(" Not a number"); } return true;}