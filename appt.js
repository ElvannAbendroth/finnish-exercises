const Verb = require('./models/Verb');
const Conjugation = require('./models/Conjugation');

// import from Conjugation
const pronouns = ["Minä", "Sinä", "Hän", "Me", "Te", "He"];
const verbsPresent = {
    "rakastaa": ["rakastan", "rakastat", "rakastaa", "rakastamme", "rakastatte", "rakastavat"],
    "syödä": ["syön", "syöt", "syö", "syömme", "syötte", "syövat"]
};

var myVerb = new Verb("rakastaa", "I");
var myConjugatedVerb = new Conjugation(myVerb, "Minä", "present");

console.log(myVerb);
console.log(myVerb.getInfinitive());
console.log(myVerb.getType());

console.log("----------------------------");

console.log(myConjugatedVerb.getVerb());
console.log(myConjugatedVerb.getVerb().getInfinitive());
console.log(myConjugatedVerb.getVerb().getType());
console.log(myConjugatedVerb.getPronoun());
console.log(myConjugatedVerb.getTense());
console.log(myConjugatedVerb.getPronounIndex());
console.log(myConjugatedVerb.getPronoun() + " " + myConjugatedVerb.conjugatePresent());

var syoda = new Verb("syödä", "I");
var syodaPresent = new Conjugation(syoda, "Sinä", "present");

console.log(syodaPresent.getPronoun() + " " + syodaPresent.conjugatePresent());

var randomVerb = verbsPresent[Math.floor(Math.random()*verbsPresent.length)];
var randomPronoun = pronouns[Math.floor(Math.random()*pronouns.length)];

//var randomConjugatedVerb = new Conjugation(randomVerb, randomPronoun, "present");
//console.log(randomConjugatedVerb.getPronoun() + " " + randomConjugatedVerb.conjugatePresent());

console.log(randomVerb);
console.log(verbsPresent["rakastaa"]);

//how to select a random key from a dictionary from an index number??? 

