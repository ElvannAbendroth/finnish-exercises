class Verb {

    constructor(formsList) {
        this.infinitive = formsList[0];
        this.translation = formsList[1];
        this.type = formsList[2];

        const presentOffset = 3;
        const pastOffset = 9;
    
        this.conjugations = {
            "present": {
                "minä": formsList[presentOffset + 0],
                "sinä": formsList[presentOffset + 1],
                "hän": formsList[presentOffset + 2],
                "me": formsList[presentOffset + 3],
                "te": formsList[presentOffset + 4],
                "he": formsList[presentOffset + 5],
            },
            "past": {
                "minä": formsList[pastOffset + 0],
                "sinä": formsList[pastOffset + 1],
                "hän": formsList[pastOffset + 2],
                "me": formsList[pastOffset + 3],
                "te": formsList[pastOffset + 4],
                "he": formsList[pastOffset + 5],
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