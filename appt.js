const Verb = require('./models/Verb');
const Conjugation = require('./models/Conjugation');
const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


// import from Conjugation
const pronouns = ["Minä", "Sinä", "Hän", "Me", "Te", "He"];
const verbsPresent = {
    "rakastaa": ["rakastan", "rakastat", "rakastaa", "rakastamme", "rakastatte", "rakastavat"],
    "syödä": ["syön", "syöt", "syö", "syömme", "syötte", "syövat"],
    "haluta": ["haluan", "haluat", "haluaa", "haluamme", "haluatte", "haluavat"],
    "olla": ["olen", "olet", "on", "olemme", "olette", "ovat"],
    "puhua": ["puhun", "puhut", "puhuu", "puhumme", "puhutte", "puhuvat"],
    "kirjoitta": ["kirjoitan", "kirjoitat", "kirjoittaa", "kirjoitamme", "kirjoitate", "kirjoittavat"]
};

// move functions to another file
function randomizeConjugatedVerb(){
    const randomPronoun = pronouns[Math.floor(Math.random()*pronouns.length)];

    const keys = Object.keys(verbsPresent);
    const index = Math.floor(Math.random() * keys.length);
    const randomInfinitive = keys[index];

    const randomConjugatedVerb = new Conjugation(new Verb(randomInfinitive, "I"), randomPronoun, "present");
    

    return randomConjugatedVerb;
};

function printRandomconjugatedVerbs(amount){
    var i;
    for (i = 0; i < amount; i++) { 
        var rv1 = randomizeConjugatedVerb();
        console.log(rv1.getPronoun() + " " + rv1.conjugatePresent());
    }
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


exerciseVerb = randomizeConjugatedVerb();
exerciseVerb2 = randomizeConjugatedVerb();
exerciseVerb3 = randomizeConjugatedVerb();
exerciseVerb4 = randomizeConjugatedVerb();

const exercises = [
{ prompt: "Infinitive: " + exerciseVerb.getVerb().getInfinitive() + "  Pronoun: " + exerciseVerb.getPronoun() + " \n type answer: ", correctAnswer: exerciseVerb.conjugatePresent()},
{ prompt: "Infinitive: " + exerciseVerb2.getVerb().getInfinitive() + "  Pronoun: " + exerciseVerb2.getPronoun() + " \n type answer: ", correctAnswer: exerciseVerb2.conjugatePresent() },
{ prompt: "Infinitive: " + exerciseVerb3.getVerb().getInfinitive() + "  Pronoun: " + exerciseVerb3.getPronoun() + " \n type answer: ", correctAnswer: exerciseVerb3.conjugatePresent() },
{ prompt: "Infinitive: " + exerciseVerb4.getVerb().getInfinitive() + "  Pronoun: " + exerciseVerb4.getPronoun() + " \n type answer: ", correctAnswer: exerciseVerb4.conjugatePresent() }

];

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
