window.score = { };
window.score.success = 0;
window.score.missed = 0;
window.score.totalExercises = 0;
window.score.tense = 'present';

function setTense(tense) {
    window.score.tense = tense;
    fetchQuestion();
    // update the text    
}


function resetScore(){
    window.score.success = 0;
    window.score.missed = 0;
    window.score.totalExercises = 0;

    $('#success, #success-icon, #success-text').addClass('active', 500, () => {
        $('#success, #success-icon #success-text').removeClass('active', 200, () => {
        });
    });

    $('#missed, #missed-icon #missed-text').addClass('active', 500, () => {
        $('#missed, #missed-icon #missed-text').removeClass('active', 200, () => {
        });
    });

    $('#totalExercises, #total-icon #total-text').addClass('active', 500, () => {
        $('#totalExercises, #total-icon, #total-text').removeClass('active', 200, () => {
        });
    });


    updateStats(window.score.success, window.score.missed, window.score.totalExercises);
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
            $('#verb-input').addClass('correct', 300, () => {
                $('#verb-input').removeClass('correct', 200, () => {
                    fetchQuestion();
                });
            });
            //TODO: create a step that replicates the alert effect of waiting from a user input, and will clear the exercise
            
            $('#totalExercises, #total-icon #total-text').addClass('active', 500, () => {
                $('#totalExercises, #total-icon, #total-text').removeClass('active', 200, () => {
                });
            });
            window.score.totalExercises += 1;
            $('#totalExercises').html(window.score.totalExercises);
            $('#answerMissed').html('');
            if (window.score.noMistake < 1){
                
                $('#success, #success-icon, #success-text').addClass('active', 500, () => {
                    $('#success, #success-icon #success-text').removeClass('active', 200, () => {
                    });
                });
                
                window.score.success += 1;
                
            }
            updateStats(window.score.success, window.score.missed, window.score.totalExercises);
        } else {
            $('#verb-input').addClass('wrong', 300, () => {
                $('#verb-input').removeClass('wrong', 200);
            });
            $('#verb-input').val('');
            if (window.score.noMistake < 1){
                $('#missed, #missed-icon #missed-text').addClass('active', 500, () => {
                    $('#missed, #missed-icon #missed-text').removeClass('active', 200, () => {
                    });
                });
                window.score.missed +=1;
                updateStats(window.score.success, window.score.missed, window.score.totalExercises);
            } if (window.score.noMistake >= 2){
                $('#answerMissed').html('Answer: ' + window.score.conjugatedVerb);
            }
            window.score.noMistake += 1;
        }
    });   
});