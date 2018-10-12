/* Set the width of the side navigation to 250px */
function openNav() {
    navigationContent();
    document.getElementById("mainNav").style.width = "100%";
}


/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("mainNav").style.width = "0";
};


function navigationContent(){
    const html = `<div class="d-flex p-4 justify-content-between">
            <h1><i class="material-icons p-2 align-middle">menu</i>menu</h1>
            <a class="close align-middle closebtn" onclick="closeNav()" ><i class="material-icons p-1 ">clear</i></a>
        </div>

                
        <div class="d-flex flex-column">

            <h2 class="p-2"><i class="material-icons p-2 align-middle">school</i>learn finnish</h2>
            <button data-dismiss="modal" class="btn btn-menu" onclick="pronounContent()"><i class="material-icons p-2 align-middle">star</i>pronouns</button>
            <button data-dismiss="modal" class="btn btn-menu" onclick="consonantContent()"><i class="material-icons p-2 align-middle">star</i>consonant gradation</button>
            <button data-dismiss="modal" class="btn btn-menu" onclick="conjugaisonContent()"><i class="material-icons p-2 align-middle">star</i>verb conjugaison</button> 
            


            <h2 class="p-2"><i class="material-icons p-2 align-middle">settings</i>exercise settings</h2>  
            <button class="btn btn-menu" onclick="setTense('present')"><i class="material-icons p-2 align-middle">check</i>present tense</button>
            <button class="btn btn-menu" onclick="setTense('past')"><i class="material-icons p-2 align-middle">check</i>past tense</button>
            <button class="btn btn-menu" onclick="setTense('conditional')"><i class="material-icons p-2 align-middle">check</i>conditional mood</button>
            <hr>
            <button data-dismiss="modal" class="btn btn-menu" onclick="resetScore()"><i class="material-icons p-2 align-middle">highlight_off</i>reset score</button>
            <button data-dismiss="modal" class="btn btn-menu" onclick="aboutContent()"><i class="material-icons p-2 align-middle">info</i>about</button>
            <br>
        </div>`

    $("#mainNav").html(html);
}

function consonantContent(){
    const html = `<div class="d-flex p-4 justify-content-between">
            <h1 class="align-middle"><i class="material-icons p-2 align-middle">star</i>consonant gradation</h1>    
            <a class="close align-middle closebtn" onclick="closeNav()" ><i class="material-icons p-1 ">clear</i></a>
        </div>
        
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
        <button data-dismiss="modal" class="btn btn-menu" onclick="navigationContent()"><i class="material-icons p-2 align-middle">arrow_back_ios</i>return</button>
        <br><br>
    `
    $("#mainNav").html(html);
}

function pronounContent(){
    const html = `<div class="d-flex p-4 justify-content-between">
        <h1 class="align-middle"><i class="material-icons p-2 align-middle">star</i>pronouns</h1>    
        <a class="close align-middle closebtn" onclick="closeNav()" ><i class="material-icons p-1 ">clear</i></a>
        </div>

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
        <button data-dismiss="modal" class="btn btn-menu" onclick="navigationContent()"><i class="material-icons p-2 align-middle">arrow_back_ios</i>return</button>`
    $("#mainNav").html(html);
}

function aboutContent(){
    const html = `<div class="d-flex p-4 justify-content-between">
        <h1 class="align-middle"><i class="material-icons p-2 align-middle">info</i>about</h1>    
        <a class="close align-middle closebtn" onclick="closeNav()" ><i class="material-icons p-1 ">clear</i></a>
    </div>

    <div class="p-4">
        <p>"Opetellaan Suomea" is a web application designed to help you learn & practice Finnish.</p>
        <p>In the current exercise, you are given verb in it’s infinitive form, and you must conjugate it to the present tense accordingly to a given pronoun.  The translate window gives you a few tips on how to conjugate verb in Finnish.</p>
        <p> Questions?<br>
            <a href="http://www.elvann.com/contact" target="_blank">elvann.com/contact</a></p><br>     
        <button data-dismiss="modal" class="btn btn-menu" onclick="navigationContent()"><i class="material-icons p-2 align-middle">arrow_back_ios</i>return</button>
    </div>`

    $("#mainNav").html(html);
}


function conjugaisonContent(){
    const html = ` <div class="d-flex p-4 justify-content-between">
        <h1 class="align-middle"><i class="material-icons p-2 align-middle">star</i>verb conjugation</h1>    
        <a class="close align-middle closebtn" onclick="closeNav()" ><i class="material-icons p-1 ">clear</i></a>
    </div>

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
    <button data-dismiss="modal" class="btn btn-menu" onclick="navigationContent()"><i class="material-icons p-2 align-middle">arrow_back_ios</i>return</button>
    <br><br>`

    $("#mainNav").html(html);
}

