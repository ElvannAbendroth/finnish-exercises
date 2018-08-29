class Verb {
    constructor(infinitive, type) {
        this.infinitive = infinitive;
        this.type = type;
    }

    getInfinitive() {
        return this.infinitive;
    }

    getType() {
        return this.type;
    }
}

module.exports = Verb;



