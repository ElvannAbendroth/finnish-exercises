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

const scoreBoard = new ScoreBoard('score');

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

function fetchQuestion(){
    const tense = window.score.tense || 'present';
    $.get('/question?tense=' + tense, function(data, status) {
    /* this code is executed when get requests to my-url returns with a response */
    const pronoun = data.pronoun;
    const conjugatedVerb = data.verb.conjugations[data.tense][pronoun];
    const infinitive = data.verb.infinitive;
    const translation = data.verb.translation;
    const verbType = data.verb.type;
    verbHelp = "";
    
    if (verbType == 1){
        verbHelp = "-Va/-Vä <br>\
        <ul><li>To conjugate this group, remove -a or -ä from the infinitive and add the stem.</li>\
        <li>This type of verb undergoes <i>consonnant gradation</i> if possible.</li></ul>";
        }
    else if (verbType == 2){
        verbHelp = "-da/-dä <br>\
        To conjugate this group, remove -da or -dä from the infinitive and add the stem.<br>\
        ";
        }
    else if (verbType == 3){
        verbHelp = "I am a type 3 verb!";
        }
    else if (verbType == 4){
        verbHelp = "I am a type 4 verb!";
        }
    else if (verbType == 5){
        verbHelp = "I am a type 5 verb!";
        }
    else{
        verbHelp = "I am a type 6 verb!";
        }
    
    $('#pronoun').html(pronoun);
    $('#infinitive').html(infinitive);
    $("#verb-input").attr("placeholder", infinitive);
    $('#verb-input').val('');
    $('#translation').html(translation);
    
    if (verbType != ""){
        $('#verbTypeTitle').html("verbityypi " + verbType);
        $('#verbTypeHelp').html(verbHelp);
    }
    else{
        $('#verbTypeTitle').html("verbityypi unknown");
        $('#verbTypeHelp').html("Anteeksi! We currently do not have information about how to conjugate this verb.");
    }
    

    window.score.conjugatedVerb = conjugatedVerb;
    window.score.noMistake = 0; // resets every round
    
    });
}

$( document ).ready(function() {
    /* This code gets executed when the page loads */ 

    fetchQuestion();
    scoreBoard.setScore(0, 0, 0);

    $('#answerForm').submit((event) => {
        event.preventDefault();
        const answer = $('#verb-input').val();
        const isCorrect = answer === window.score.conjugatedVerb;
        if (isCorrect) {
            //TODO: create a step that replicates the alert effect of waiting from a user input, and will clear the exercise
            
            scoreBoard.increaseTotal();
            $('#answerMissed').html('');
            if (window.score.noMistake < 1){                
                scoreBoard.increaseSuccess();
            }
        } else {
            $('#verb-input').addClass('wrong', 300, () => {
                $('#verb-input').removeClass('wrong', 200);
            });
            $('#verb-input').val('');
            if (window.score.noMistake < 1){
                scoreBoard.increaseMissed();
            } if (window.score.noMistake >= 2){
                $('#answerMissed').html('Answer: ' + window.score.conjugatedVerb);
            }
            window.score.noMistake += 1;
        }
    });   
});