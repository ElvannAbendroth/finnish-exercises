class QuestionBox {

    constructor (wrapperId) {
        this.wrapperId = wrapperId;
        //this.onSubmit = onSubmit;
        this.setQuestion('', '', '');
        $('#' + this.wrapperId).submit((event) => {
            event.preventDefault();
            this.onSubmit()
        });
    }


    setQuestion(tense, pronoun, infinitive) {
        const html = `<form id="answerForm">
            <div class="d-flex align-middle">
                <div class="flex-grow-1">
                    <h1 class="d-none d-sm-block p-2">${tense} verb exercises</h1>
                    <p class="d-none d-sm-block p-2">Conjugate the Finnish verb to the present tense with it’s pronoun.</p>
                    <h2 id="pronoun" class="p-2">${pronoun}</h2>

                </div>
                <a id="helpIcon" class="p-2"><i class="material-icons">help</i></a>
                <a id="refreshIcon"><i class="material-icons p-2">refresh</i></a>

            </div>

            <div id="input-line" class="d-flex p-2">
                    <input type="text" id="verb-input" name="verb" class="form-control flex-grow-1" placeholder="${infinitive}" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false">
                    <button type="submit" class="button-icon p-2"><i class="material-icons">send</i></button>
            </div>
            <div class="d-flex" >
                <small class="p-2 d-block">(${tense})</small>
                <small id="answerMissed" class="p-2"></small>
            </div>

        </form>`;
        $('#' + this.wrapperId).html(html);

        $('#verb-input').focus();
    }

    showCorrectAnswer(answer) {
        $('#answerMissed').html('[answer: ' + answer + ']');
    }

    clearAnswer() {
        $('#verb-input').val('');
    }

    getAnswer() {
        return $('#verb-input').val();
    }

    onSubmit() {
        const isCorrect = app._questionBox.getAnswer() === window.score.conjugatedVerb;
        if (isCorrect) {
            //TODO: create a step that replicates the alert effect of waiting from a user input, and will clear the exercise
            $('#verb-input').addClass('correct', 300, () => {
                $('#verb-input').removeClass('correct', 200, () => {
                    app._verbExercise.fetchQuestion();
                })
            });
            app._scoreBoard.increaseTotal();
            if (window.score.noMistake < 1){
                app._scoreBoard.increaseSuccess();
            }
        } else {
            $('#verb-input').addClass('wrong', 300, () => {
                $('#verb-input').removeClass('wrong', 200);
            });
            app._questionBox.clearAnswer();
            if (window.score.noMistake < 1){
                app._scoreBoard.increaseMissed();
            } if (window.score.noMistake >= 2){
                app._questionBox.showCorrectAnswer(window.score.conjugatedVerb);
            }
            window.score.noMistake += 1;
        }
    }

}
