class App {

    constructor (){
        this._sideNav = new SideNav('mainNav')

    }
    
    run(){
        
        fetchQuestion();
        //const _sideNav = new SideNav('mainNav')
        this._sideNav.bindEvents();
        this._sideNav.closeNav();
       
        
    }

    getsideNav(){
        return this._sideNav;

    }

}

const app = new App();
const scoreBoard = new ScoreBoard('score');
const verbHelp = new VerbHelp('mainNav');
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
        app._sideNav.bindEvents();
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


class QuestionData {

    
}


const navigationHtmls = {
    'default': `<div class="d-flex p-4 justify-content-between">
                    <h1><i class="material-icons p-2 align-middle">menu</i>menu</h1>
                    <a id="closeIcon" class="close align-middle closebtn"><i  class="material-icons p-1 ">clear</i></a>
                </div>
                        
                <div class="d-flex flex-column">

                    <h2 class="p-2"><i class="material-icons p-2 align-middle">school</i>learn finnish</h2>
                    <button id="pronounButton" data-dismiss="modal" class="btn btn-menu""><i class="material-icons p-2 align-middle">star</i>pronouns</button>
                    <button id="consonantButton" class="btn btn-menu"><i class="material-icons p-2 align-middle">star</i>consonant gradation</button>
                    <button id="conjugationButton" class="btn btn-menu"><i class="material-icons p-2 align-middle">star</i>verb conjugaison</button> 
                    


                    <h2 class="p-2"><i class="material-icons p-2 align-middle">settings</i>exercise settings</h2>  
                    <button id="presentButton" class="btn btn-menu"><i class="material-icons p-2 align-middle">check</i>present tense</button>
                    <button id="pastButton" class="btn btn-menu"><i class="material-icons p-2 align-middle">check</i>past tense</button>
                    <button id="conditionalButton" class="btn btn-menu"><i class="material-icons p-2 align-middle">check</i>conditional mood</button>
                    <hr>
                    <button id="resetButton" class="btn btn-menu"><i class="material-icons p-2 align-middle">highlight_off</i>reset score</button>
                    <button id="aboutButton" class="btn btn-menu"><i class="material-icons p-2 align-middle">info</i>about</button>
                    <br>
                </div>`,

    'consonant': `<div class="d-flex p-4 justify-content-between">
                    <h1 class="align-middle"><i class="material-icons p-2 align-middle">star</i>consonant gradation</h1>    
                    <a id="closeIcon" class="close align-middle closebtn"><i class="material-icons p-1 ">clear</i></a>                </div>

                <div class="p-4">
                    <p>Some Finnish words go under <i>consonant gradation</i> when conjugated.  Here's a table containing the "strong > weak" consonant combinations to apply this gradation. </p>
                    <ul>
                        <li>pp > p</li>
                        <li>tt > t</li>
                        <li>kk ></li>
                        <li>k > ø </li>
                        <li>p > v</li>
                        <li>t > d</li>
                        <li>nk > ng</li>
                        <li>nt > nn</li>
                        <li>lt > ll</li>
                        <li>rt > rr</li>
                        <li>mp > mm</li>
                    </ul>
                </div>
                <button id="returnButton" class="btn btn-menu"><i class="material-icons p-2 align-middle">arrow_back_ios</i>return</button>
                <br><br>`,
    
    'pronoun': `<div class="d-flex p-4 justify-content-between">
                    <h1 class="align-middle"><i class="material-icons p-2 align-middle">star</i>pronouns</h1>    
                    <a id="closeIcon" class="close align-middle closebtn"><i class="material-icons p-1 ">clear</i></a>                </div>

                <div class="p-4">
                <p>Here are the pronouns in Finnish as well as their english counterpart.  N.B. "he" is used 
                    in formal situation instead of "hän"</p>
                <ul>
                    <li>minä - I</li>
                    <li>sinä - you</li>
                    <li>hän - he/she</li>
                    <li>me - we</li>
                    <li>te - you (pl.)</li>
                    <li>he - they</li>
                </ul>
                </div>
                <button id="returnButton" class="btn btn-menu"><i class="material-icons p-2 align-middle">arrow_back_ios</i>return</button>
                `,
    
    'about': `<div class="d-flex p-4 justify-content-between">
                <h1 class="align-middle"><i class="material-icons p-2 align-middle">info</i>about</h1>    
                <a id="closeIcon" class="close align-middle closebtn"><i class="material-icons p-1 ">clear</i></a>
            </div>

            <div class="p-4">
                <p>"Opetellaan Suomea" is a web application designed to help you learn & practice Finnish.</p>
                <p>In the current exercise, you are given verb in it’s infinitive form, and you must conjugate it to the present tense accordingly to a given pronoun.  The translate window gives you a few tips on how to conjugate verb in Finnish.</p>
                <p> Questions?<br>
                <a href="http://www.elvann.com/contact" target="_blank">elvann.com/contact</a></p><br>     
                <button id="returnButton" class="btn btn-menu"><i class="material-icons p-2 align-middle">arrow_back_ios</i>return</button>
            </div>`,
    
    'conjugation': ` <div class="d-flex p-4 justify-content-between">
                        <h1 class="align-middle"><i class="material-icons p-2 align-middle">star</i>verb conjugation</h1>    
                        <a id="closeIcon" class="close align-middle closebtn"><i class="material-icons p-1 ">clear</i></a>                    </div>

                    <div class="p-4">

                        <h2>conjugation stems</h2>
                        <ul>
                            <li>minä - n</li>
                            <li>sinä - t</li>
                            <li>hän - /double vowel</li>
                            <li>me - mme</li>
                            <li>te - tte</li>
                            <li>he - -vat</li>
                        </ul>

                        
                        
                    </div>
                    <button id="returnButton" class="btn btn-menu"><i class="material-icons p-2 align-middle">arrow_back_ios</i>return</button>
                    <br><br>`
};

/* Set the width of the side navigation to 250px */


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