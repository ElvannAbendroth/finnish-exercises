class Question {

    constructor (verb, tense, pronoun) {
        this.verb = verb;
        this.tense = tense;
        this.pronoun = pronoun;
    }

    getPrompt() {
        return "Infinitive: " + this.verb.getInfinitive() + "  Pronoun: " + this.pronoun + " \n type answer: ";
    }

    getCorrectAnswer() {
        return this.verb.getConjugation(this.tense, this.pronoun);
    }

}

module.exports = Question;