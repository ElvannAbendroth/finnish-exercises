class ScoreBoard {
    
    constructor (wrapperId) {
        this.wrapperId = wrapperId;
        this.success = 0;
        this.missed = 0;
        this.total = 0;
        this.setScore(0, 0, 0);
    }

    getSuccess() { return this.success; }

    getMissed() { return this.missed; }

    getTotal() { return this.total; }

    increaseSuccess() { this.setScore(this.success + 1, this.missed, this.total); }

    increaseMissed() { this.setScore(this.success, this.missed + 1, this.total); }

    increaseTotal() { this.setScore(this.success, this.missed, this.total + 1); }

    setScore(success, missed, total) {
        const html = 
        `<div class="d-flex">
            <div class="flex-grow-1">
                <span id="success" class="score-number ">${success}</span><br>
                <i id="success-icon" class="material-icons p-2 d-block d-sm-none">check</i>
                <span id="success-text" class="d-none d-sm-block p-2">success</span>
            </div>
            <div class="flex-grow-2">
                <span id="missed" class="score-number ">${missed}</span><br>
                <i id="missed-icon" class="material-icons p-2 d-block d-sm-none">clear</i>
                <span id="missed-text" class="d-none d-sm-block p-2">missed</span>
            </div>
            <div class="flex-grow-1">
                <span id="totalExercises" class="score-number ">${total}</span><br>
                <i id="total-icon" class="material-icons p-2 d-block d-sm-none">panorama_fish_eye</i>
                <span id="total-text" class="d-none d-sm-block p-2">total</span>
            </div>
        </div>`;
        $('#' + this.wrapperId).html(html);

        const animate = (identifiers) => {
            $(identifiers).addClass('active', 500, () => {
                $(identifiers).removeClass('active', 200, () => {});
            });
        }

        if (success != this.success) {
            animate('#success, #success-icon, #success-text');
        }

        if (missed != this.missed) {
            animate('#missed, #missed-icon #missed-text');
        }

        if (total != this.total) {
            animate('#totalExercises, #total-icon #total-text');
        }

        this.success = success;
        this.missed = missed;
        this.total = total;
    }

}

class VerbHelp {

    constructor (wrapperId) {
        this.wrapperId = wrapperId;
    }

    updateInfo (infinitive, translation, type) {
        //const verbTypeTitle = 'verbityyppi ' + (type || 'unknown');

        const html = `<div class="d-flex p-4 justify-content-between align-middle">
            <h1 class="align-bottom"><i class="material-icons p-2 align-middle">help</i>help</h1>    
            <a class="close align-middle" data-dismiss="modal"><i class="material-icons p-1 ">clear</i></a>
        </div>
    
        <div class="scroll p-4">
            <p>Here's a little bit of info to help you help you with this exercise.</p>
            <h2 id="infinitive">${infinitive}</h2>
            <p><i class="material-icons p-2 align-middle">translate</i><span id="translation">${translation}</span></p>
            <p id="verbTypeHelp">${this._getVerbHelp(type, infinitive)}</p>
            
        </div>`;
        $('#' + this.wrapperId).html(html);
    }

    _getVerbHelp(type, infinitive) {
        //let infinitive_cap = this.infinitive.charAt(0).toUpperCase()
        
        switch (type) {
            case 1: 
                return `<h2>verbityypi i</h2>
                <p>endings: -Va/-Vä (V = any vowel)</p>
                <ul>
                    <li>In the present form, remove -a or -ä from the infinitive and add the stem.</li>
                    <li>This type of verb might undergo a strong > weak <i>consonnant gradation</i> on 1st & second person singular and plural.</li>
                </ul>`;
            case 2: 
                return `<h2>verbityypi ii</h2>
                <p>endings: -da/-dä</p>
                <ul>
                    <li>In the present form, remove -da or -dä from the infinitive and add the stem.</li>
                    <li>"nähdä", "tehdä" and "arvioida" are irregular.  "Nähdä" and "tehdä" follow the same conjugaison pattern as "lukea" (verbityypi i)</li>
                </ul>`;
            case 3:
                return `<h2>verbityypi iii</h2>
                <p>endings: -la/-lä, -na/-nä, -ra/-rä, -sta/-stä</p>
                <ul>
                    <li>In the present form, remove the assoiated stem from the infinitive and add the regular stem.</li>
                    <li>In the present, the first person singular (minä), an -e is added before the -n stem.</li>
                    <li>This type of verb might undergoe a weak > strong <i>consonnant gradation</i> on all the persons.  Passive form keeps the weak consonant.</li>
                    <li>Olla is an irregular verb.</li>
                </ul>`;
            case 4:
                return `<h2>verbityypi iv</h2>
                <p>endings: -Vta/-Vtä</p>
                <ul>
                    <li>In the present form, remove the -a/-ä from the infinitive and add the regular stem.</li>
                    <li>Sometimes verbs in -etä and -itä might be part of group 4, but they are likely part of group V or VI</li>
                    <li>In the present, the first person singular (minä), an -e is added before the -n stem.</li>
                    <li>This type of verb might undergoe a weak > strong <i>consonnant gradation</i> on all the persons.  Passive form keeps the weak consonant.</li>
                </ul>`;
            case 5:
                return `<h2>verbityypi v</h2>
                <p>endings: -ita/-itä</p>
                <ul>
                    <li>In the present form, remove the -a/-ä from the infinitive, add -se and the regular stem.</li>
                    <li>Sometimes verbs in -etä and -itä might be part of group 4, but they are likely part of group V or VI</li>
                    <li>In the present, the first person singular (minä), an -e is added before the -n stem.</li>
                </ul>`;
            case 6:
                return `<h2>verbityypi vi</h2>
                <p>endings: -eta/-etä</p>
                <ul>
                    <li>In the present form, remove the -a/-ä from the infinitive, change the -t to -ne, and add the regular stem.</li>
                    <li>Sometimes verbs in -etä and -itä might be part of group 4, but they are likely part of group V or VI</li>
                    <li>In the present, the first person singular (minä), an -e is added before the -n stem.</li>
                    <li>This type of verb might undergoe a weak > strong <i>consonnant gradation</i> on all the persons.  Passive form keeps the weak consonant.</li>
                </ul>`;
            default:
                return 'Anteeksi! We currently do not have information about how to conjugate this verb.';
        }
    }

}

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
                <a class="p-2" data-toggle="modal" data-target="#translate-modal"><i class="material-icons">help</i></a>
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

const scoreBoard = new ScoreBoard('score');
const verbHelp = new VerbHelp('translate-modal');
const questionBox = new QuestionBox('question-card', submitQuestion);

window.score = { };
window.score.tense = 'present';

function setTense(tense) {
    window.score.tense = tense;
    fetchQuestion();
    // update the text    
}

function resetScore(){
    scoreBoard.setScore(0, 0, 0);
}

function fetchQuestion() {
    const tense = window.score.tense || 'present';
    $.get('/question?tense=' + tense, function(data, status) {
        /* this code is executed when get requests to my-url returns with a response */
        const pronoun = data.pronoun;
        const conjugatedVerb = data.verb.conjugations[data.tense][pronoun];
        const infinitive = data.verb.infinitive;
        const translation = data.verb.translation;
        const verbType = data.verb.type;

        verbHelp.updateInfo(infinitive, translation, verbType);

        questionBox.setQuestion(tense, pronoun, infinitive);
        
        window.score.conjugatedVerb = conjugatedVerb;
        window.score.noMistake = 0; // resets every round
    });
}

function submitQuestion() {
    const isCorrect = questionBox.getAnswer() === window.score.conjugatedVerb;
    if (isCorrect) {
        //TODO: create a step that replicates the alert effect of waiting from a user input, and will clear the exercise
        $('#verb-input').addClass('correct', 300, () => {
            $('#verb-input').removeClass('correct', 200, () => {
                fetchQuestion();
            })
        });
        scoreBoard.increaseTotal();
        if (window.score.noMistake < 1){                
            scoreBoard.increaseSuccess();
        }
    } else {
        $('#verb-input').addClass('wrong', 300, () => {
            $('#verb-input').removeClass('wrong', 200);
        });
        questionBox.clearAnswer();
        if (window.score.noMistake < 1){
            scoreBoard.increaseMissed();
        } if (window.score.noMistake >= 2){
            questionBox.showCorrectAnswer(window.score.conjugatedVerb);
        }
        window.score.noMistake += 1;
    }
}

$( document ).ready(function() {
    /* This code gets executed when the page loads */
    fetchQuestion();

    document.onkeydown = function(evt) {
        evt = evt || window.event;
        if (evt.keyCode == 27) {
            $('.modal').modal('hide');
        }
    };

   
});