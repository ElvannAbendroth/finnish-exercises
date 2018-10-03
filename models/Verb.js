class Verb {

    constructor(formsList) {
        this.infinitive = formsList[0];
        this.translation = formsList[1];
        this.type = formsList[2];
    
        this.conjugations = {
            "present": {
                "minä": formsList[3],
                "sinä": formsList[4],
                "hän": formsList[5],
                "me": formsList[6],
                "te": formsList[7],
                "he": formsList[8],
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