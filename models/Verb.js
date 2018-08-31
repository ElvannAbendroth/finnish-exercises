const pronouns = require('./PronounEnum');
const verbsPresent = require('./verbData');

class Verb {
    constructor(infinitive, type, pronoun, tense) {
        this.infinitive = infinitive;
        this.type = type;
        this.pronoun = pronoun;
        this.tense = tense;
        //this.translation = translation;
    }

    getInfinitive() {
        return this.infinitive;
    }

    getType() {
        return this.type;
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

        return verbsPresent[this.getInfinitive()][this.getPronounIndex()];

    }
}

module.exports = Verb;