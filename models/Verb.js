class Verb {
    constructor(p_infinitive, p_type) {
        this.infinitive = p_infinitive;
        this.type = p_type;
    }

    get infinitive() {
        return this.infinitive;
    }

    get type() {
        return this.type;
    }
}

module.exports = Verb;



