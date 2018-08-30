const Verb = require('./Verb');

const pronouns = ["Minä", "Sinä", "Hän", "Me", "Te", "He"];
const verbsPresent = {
    "rakastaa": ["rakastan", "rakastat", "rakastaa", "rakastamme", "rakastatte", "rakastavat"],
    "syödä": ["syön", "syöt", "syö", "syömme", "syötte", "syövat"]
};


class Conjugation {
    constructor(verb, pronoun, tense) {
        this.verb = verb;
        this.pronoun = pronoun;
        this.tense = tense;
    }

    getVerb() {
        return this.verb;
    }

    getPronoun() {
        return this.pronoun;
    }

    getTense() {
        return this.tense;
    }
    
    getPronounIndex(){
        
        var i = 0;
        var pronounIndex;
        pronouns.forEach(element => {
            if (element == this.pronoun){
                pronounIndex = i;
            }
            else {
                i = ++i;
            }

        });

        return pronounIndex;

    }

    

    conjugatePresent(){

        return verbsPresent[this.getVerb().getInfinitive()][this.getPronounIndex()];

    }
}

module.exports = Conjugation;