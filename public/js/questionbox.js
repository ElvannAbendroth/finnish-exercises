class QuestionBox {

    constructor (wrapperId, onSubmit) {
        this.wrapperId = wrapperId;
        this.onSubmit = onSubmit;
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
                <a onclick="fetchQuestion()"><i class="material-icons p-2">refresh</i></a>

            </div>
            
            <div id="input-line" class="d-flex p-2">
                    <input type="text" id="verb-input" name="verb" class="form-control flex-grow-1" placeholder="${infinitive}" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false">           
                    <button type="submit" class="button-icon p-2"><i class="material-icons">send</i></button>
            </div>
            <div class="d-flex" >
                <small class="p-2 d-block d-sm-none">(${tense})</small>
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

}
