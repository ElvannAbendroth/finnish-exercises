const Verb = require('./models/Verb');
const pronouns = require('./models/PronounEnum');
const verbsPresent = require('./models/verbData');
const Conjugation = require('./models/Conjugation');
const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// move functions to another file
function randomizeConjugatedVerb(){
    const randomPronoun = pronouns[Math.floor(Math.random()*pronouns.length)];

    const keys = Object.keys(verbsPresent);
    const index = Math.floor(Math.random() * keys.length);
    const randomInfinitive = keys[index];

    const randomConjugatedVerb = new Conjugation(new Verb(randomInfinitive, "I"), randomPronoun, "present");

    return randomConjugatedVerb;
};

//returns an array of random conjugated verbs of an {amount} of elements
function randomConjugatedVerbsArray(amount){
    var i;
    var array = [];
    for (i = 0; i < amount; i++) { 
        var randomConjugatedVerb = randomizeConjugatedVerb();
        //console.log(randomConjugatedVerb);
        array.push(randomConjugatedVerb);
    }
    return array;
};

function verbConjugationMatch(promptConjugatedVerb, userVerbInput){
       
        if (promptConjugatedVerb.conjugatePresent() == userVerbInput){
            console.log("Verb Match!");
            return true;
        }
        else{
            console.log("Wrong verb!");
            return false;
    }
};

const numberOfExercises = 4;
const verbExercises = (randomConjugatedVerbsArray(numberOfExercises));

const exercises = [];
for (let i = 0; i < numberOfExercises; i++) {
    exercises.push({ 
        prompt: "Infinitive: " + verbExercises[i].getVerb().getInfinitive() + "  Pronoun: " + verbExercises[i].getPronoun() + " \n type answer: ", correctAnswer: verbExercises[i].conjugatePresent()
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
