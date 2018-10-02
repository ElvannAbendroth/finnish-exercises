window.score = { };
window.score.success = 0;
window.score.missed = 0;
window.score.totalExercises = 0;

function resetScore(){
    window.score.success = 0;
    window.score.missed = 0;
    window.score.totalExercises = 0;
    updateStats(window.score.success, window.score.missed, window.score.totalExercises);
}

function fetchQuestion(){
    $.get('/question', function(data, status) {
    /* this code is executed when get requests to my-url returns with a response */
    const pronoun = data.pronoun;
    const conjugatedVerb = data.verb.conjugations[data.tense][pronoun];
    const infinitive = data.verb.infinitive;
    const translation = data.verb.translation;
    
    $('#pronoun').html(pronoun);
    $('#infinitive').html(infinitive);
    $("#verb-input").attr("placeholder", infinitive);
    $('#verb-input').val('');
    $('#translation').html(translation);

    window.score.conjugatedVerb = conjugatedVerb;
    window.score.noMistake = 0; // resets every round
    
    });
}

function updateStats(numberCorrect, numberMissed, numberTotal) {
    $('#success').html(numberCorrect);
    $('#missed').html(numberMissed);
    $('#totalExercises').html(numberTotal);
}

$( document ).ready(function() {
    /* This code gets executed when the page loads */ 

    fetchQuestion();
    updateStats(window.score.success, window.score.missed, window.score.totalExercises);

    $('#answerForm').submit((event) => {
        event.preventDefault();
        const answer = $('#verb-input').val();
        const isCorrect = answer === window.score.conjugatedVerb;
        if (isCorrect) {
            $('#verb-input').addClass('correct', 350, () => {
                fetchQuestion();
                $('#verb-input').removeClass('correct', 0);
            });
            //TODO: create a step that replicates the alert effect of waiting from a user input, and will clear the exercise
            window.score.totalExercises += 1;
            $('#totalExercises').html(window.score.totalExercises);
            $('#answerMissed').html('');
            if (window.score.noMistake < 1){
                window.score.success += 1;
            }
            updateStats(window.score.success, window.score.missed, window.score.totalExercises);
        } else {
            $('#verb-input').addClass('wrong', 1000, () => {
                $('#verb-input').removeClass('wrong', 0);
            });
            $('#verb-input').val('');
            if (window.score.noMistake < 1){
                window.score.missed +=1;
                updateStats(window.score.success, window.score.missed, window.score.totalExercises);
            } if (window.score.noMistake >= 2){
                $('#answerMissed').html('Answer: ' + window.score.conjugatedVerb);
            }
            window.score.noMistake += 1;
        }
    });   
});