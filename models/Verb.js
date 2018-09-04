class Verb {

    constructor(formsList) {
        this.infinitive = formsList[0];
        this.translation = formsList[1];
    
        this.conjugations = {
            "present": {
                "minä": formsList[2],
                "sinä": formsList[3],
                "hän": formsList[4],
                "me": formsList[5],
                "te": formsList[6],
                "he": formsList[7],
            }
        };
    }

    getInfinitive() {
        return this.infinitive;
    }

    getConjugation(tense, pronoun) {
        return this.conjugations[tense][pronoun];
    }

}

module.exports = Verb;