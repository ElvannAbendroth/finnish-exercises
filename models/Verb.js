class NewVerb {

    constructor(formsList) {
        this.infinitive = formsList[0];
    
        this.conjugations = {
            "present": {
                "minä": formsList[1],
                "sinä": formsList[2],
                "hän": formsList[3],
                "me": formsList[4],
                "te": formsList[5],
                "he": formsList[6],
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

module.exports = NewVerb;