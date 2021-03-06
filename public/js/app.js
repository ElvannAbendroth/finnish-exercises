class App {

    constructor () {
        this._sideNav = new SideNav('mainNav')
        this._questionBox = new QuestionBox('question-card');
        this._verbHelp = new VerbHelp('mainNav');
        this._scoreBoard = new ScoreBoard('score');
        this._verbExercise = new VerbExercise();
    }

    run () {
        this._verbExercise.fetchQuestion();
        this._sideNav.bindEvents();
        this._sideNav.closeNav();
    }

    update() {
        this._verbHelp.updateInfo(this._verbExercise.infinitive, this._verbExercise.translation, this._verbExercise.verbType);
        this._questionBox.setQuestion(this._verbExercise.tense, this._verbExercise.pronoun, this._verbExercise.infinitive); //sets HTMLs
        this._sideNav.bindEvents();
        window.score.conjugatedVerb = this._verbExercise.conjugatedVerb;
        window.score.noMistake = 0;
    }

}

const app = new App();

window.score = { };
window.score.tense = 'present';

$( document ).ready(function() {
    /* This code gets executed when the page loads */

    app.run();

    /*document.onkeydown = function(evt) {
        evt = evt || window.event;
        if (evt.keyCode == 27) {
            $('.modal').modal('hide');
        }
    };*/
});