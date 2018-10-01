window.elvann = { };
window.elvann.success = 0;
window.elvann.missed = 0;
window.elvann.totalExercises = 0;

function resetScore (){
    window.elvann.success = 0;
    window.elvann.missed = 0;
    window.elvann.totalExercises = 0;
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

    window.elvann.conjugatedVerb = conjugatedVerb;
    window.elvann.noMistake = 0; // resets every round
    
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
    updateStats(window.elvann.success, window.elvann.missed, window.elvann.totalExercises);

    $('#answerForm').submit((event) => {
        event.preventDefault();
        const answer = $('#verb-input').val();
        const isCorrect = answer === window.elvann.conjugatedVerb;
        if (isCorrect) {
            $('#verb-input').addClass('correct', 1000, () => {
                fetchQuestion();
                $('#verb-input').removeClass('correct', 0);
            });
            //TODO: create a step that replicates the alert effect of waiting from a user input, and will clear the exercise
            window.elvann.totalExercises += 1;
            $('#totalExercises').html(window.elvann.totalExercises);
            $('#answerMissed').html('');
            if (window.elvann.noMistake < 1){
                window.elvann.success += 1;
            }
            updateStats(window.elvann.success, window.elvann.missed, window.elvann.totalExercises);
        } else {
            $('#verb-input').addClass('wrong', 1000, () => {
                $('#verb-input').removeClass('wrong', 0);
            });
            $('#verb-input').val('');
            if (window.elvann.noMistake < 1){
                window.elvann.missed +=1;
                updateStats(window.elvann.success, window.elvann.missed, window.elvann.totalExercises);
            } if (window.elvann.noMistake >= 2){
                $('#answerMissed').html('Answer: ' + window.elvann.conjugatedVerb);
            }
            window.elvann.noMistake += 1;
        }
    });   
});