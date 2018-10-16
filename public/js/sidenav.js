class SideNav {

    constructor (wrapperID) {
        this.wrapperID = wrapperID;
    }

    bindEvents(){
        $("#menuIcon").click(() => {this.openNav()});
        $("#helpIcon").click(() => {this.openNav('help')});
        $("#refreshIcon").click(() => {app._verbExercise.fetchQuestion()}); //should be moved?
        $("#closeIcon").click(() => {this.closeNav()});
        $("#pronounButton").click(() => {this.navigationContent('pronoun')});
        $("#consonantButton").click(() => {this.navigationContent('consonant')});
        $("#conjugationButton").click(() => {this.navigationContent('conjugation')});

        $("#presentButton").click(() => {app._verbExercise.setTense('present');this.closeNav()});
        $("#pastButton").click(() => {app._verbExercise.setTense('past');this.closeNav();});
        $("#conditionalButton").click(() => {app._verbExercise.setTense('conditional');this.closeNav();});

        $("#resetButton").click(() => {this.closeNav();app._scoreBoard.resetScore()});
        $("#aboutButton").click(() => {this.navigationContent('about');});

        $("#returnButton").click(() => {this.navigationContent('default')});

    }

    openNav(key = 'default') {
        this.navigationContent(key);
        document.getElementById(this.wrapperID).style.width = "100%";
    }

    /* Set the width of the side navigation to 0 */
    closeNav() {
        document.getElementById(this.wrapperID).style.width = "0";
    };

    navigationContent(key = 'default') {
        if (key === 'help'){

            app._verbHelp.updateHtml();
        }
        else{
            const html = this._getNavigationContent(key);
            $("#" + this.wrapperID).html(html);
        }

        this.bindEvents();

    }

    _getNavigationContent(key) {
        const content = {
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
        return content[key];
    }


}
