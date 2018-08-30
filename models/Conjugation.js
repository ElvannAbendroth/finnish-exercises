const Verb = require('./Verb');
const pronouns = require('./PronounEnum');

const verbsPresent = {
    "rakastaa": ["rakastan", "rakastat", "rakastaa", "rakastamme", "rakastatte", "rakastavat"],
    "syödä": ["syön", "syöt", "syö", "syömme", "syötte", "syövät"],
    "haluta": ["haluan", "haluat", "haluaa", "haluamme", "haluatte", "haluavat"],
    "olla": ["olen", "olet", "on", "olemme", "olette", "ovat"],
    "puhua": ["puhun", "puhut", "puhuu", "puhumme", "puhutte", "puhuvat"],
    "kirjoittaa": ["kirjoitan", "kirjoitat", "kirjoittaa", "kirjoitamme", "kirjoitate", "kirjoittavat"]
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