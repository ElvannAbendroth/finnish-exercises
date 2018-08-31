const Verb = require('./models/Verb');
const pronouns = require('./models/PronounEnum');
const verbsPresent = require('./models/verbData');
const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// move functions to another file
function randomizeVerb(){
    const randomPronoun = pronouns[Math.floor(Math.random()*pronouns.length)];

    const keys = Object.keys(verbsPresent);
    const index = Math.floor(Math.random() * keys.length);
    const randomInfinitive = keys[index];

    const randomVerb = new Verb(randomInfinitive, "I", randomPronoun, "present");

    return randomVerb;
};

//returns an array of random conjugated verbs of an {amount} of elements
function randomVerbsArray(amount){
    var i;
    var array = [];
    for (i = 0; i < amount; i++) { 
        var randomVerb = randomizeVerb();
        //console.log(randomConjugatedVerb);
        array.push(randomVerb);
    }
    return array;
};

function verbConjugationMatch(promptVerb, userVerbInput){
       
        if (promptVerb.conjugatePresent() == userVerbInput){
            console.log("Verb Match!");
            return true;
        }
        else{
            console.log("Wrong verb!");
            return false;
    }
};

const numberOfExercises = 4;
const verbExercises = (randomVerbsArray(numberOfExercises));

const exercises = [];
for (let i = 0; i < numberOfExercises; i++) {
    exercises.push({ 
        prompt: "Infinitive: " + verbExercises[i].getInfinitive() + "  Pronoun: " + verbExercises[i].getPronoun() + " \n type answer: ", correctAnswer: verbExercises[i].conjugatePresent()
    });
}

function runExercise(index) {
    rl.question(exercises[index].prompt, (answer) => {
    if (answer !== exercises[index].correctAnswer) {
        console.log("Oh no... Try again!");
        runExercise(index);
    }
    else if (index === exercises.length - 1) {
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
