const Verb = require('./models/Verb');
const Conjugation = require('./models/Conjugation');

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



