const NewVerb = require('./models/Verb');
const Question = require('./models/Question');
const pronouns = require('./models/PronounEnum');
const verbsPresent = require('./models/verbData');
const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function buildRandomQuestion() {
    const randomVerbIndex = Math.floor(Math.random() * verbsPresent.length);
    const verb = new NewVerb(verbsPresent[randomVerbIndex]);
    const randomPronounIndex = Math.floor(Math.random() * pronouns.length);
    const pronoun = pronouns[randomPronounIndex];
    return new Question(verb, "present", pronoun);
}

function buildRandomExercise(amount) {
    var i;
    var array = [];
    for (i = 0; i < amount; i++) { 
        var randomVerb = buildRandomQuestion();
        array.push(randomVerb);
    }
    return array;
}

const numberOfExercises = 4;
const verbExercises = buildRandomExercise(numberOfExercises);

function runExercise(index) {
    rl.question(verbExercises[index].getPrompt(), (answer) => {
    if (answer !== verbExercises[index].getCorrectAnswer()) {
        console.log("Oh no... Try again!");
        runExercise(index);
    }
    else if (index === verbExercises.length - 1) {
        console.log("Awwww yissss! You're done!")
        rl.close();
    } 
    else {
        console.log("Awwww yissss! To the next question!")
        runExercise(index + 1);
    }
});
}
runExercise(0);
