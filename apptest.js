const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stout
});

console.log('Enter a Verb:')



rl.question('Verb Input', (answer) => {
    console.log(`Here's the verb you entered: ${answer}`);
    var verbInput = answer;
    console.log(verbInput);
    rl.close();
  });

  console.log(verbInput);
  console.log("end test")

  