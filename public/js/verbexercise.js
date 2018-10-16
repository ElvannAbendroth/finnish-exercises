class VerbExercise {

    constructor(){
        this.tense = window.score.tense || 'present';
        this.pronoun;
    }
    
    
    fetchQuestion() {
    
        const tense = this.tense;

        $.get('/question?tense=' + this.tense, function(data, status) {
            /* this code is executed when get requests to my-url returns with a response */
            const pronoun = data.pronoun;
            const conjugatedVerb = data.verb.conjugations[data.tense][pronoun];
            const infinitive = data.verb.infinitive;
            const translation = data.verb.translation;
            const verbType = data.verb.type;
            
            app._verbHelp.updateInfo(infinitive, translation, verbType);
            app._questionBox.setQuestion(tense, pronoun, infinitive); //sets HTMLs
            app._sideNav.bindEvents();
            window.score.conjugatedVerb = conjugatedVerb;
            window.score.noMistake = 0;
            
        });
    }



    setTense(tense) {

        this.tense = tense;
        app._verbExercise.fetchQuestion();
    }
   
}