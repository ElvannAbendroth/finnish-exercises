class VerbExercise {

    constructor(){
        this.tense = window.score.tense || 'present';
        this.pronoun;
    }

    fetchQuestion() {
        const that = this;

        $.get('/question?tense=' + this.tense, function(data, status) {
            /* this code is executed when get requests to my-url returns with a response */
            that.pronoun = data.pronoun;
            that.conjugatedVerb = data.verb.conjugations[data.tense][data.pronoun];
            that.infinitive = data.verb.infinitive;
            that.translation = data.verb.translation;
            that.verbType = data.verb.type;

            app.update();
        });
    }

    setTense(tense) {
        this.tense = tense;
        app._verbExercise.fetchQuestion();
    }

}