class SideNav {

    constructor (wrapperID) {
        this.wrapperID = wrapperID;
    }

    bindEvents(){
        $("#menuIcon").click(() => {this.openNav();console.log("opened menu")});
        $("#helpIcon").click(() => {this.openNav('help');console.log("opened help")});
        $("#closeIcon").click(() => {this.closeNav();console.log("closed menu")});
        $("#pronounButton").click(() => {this.navigationContent('pronoun');console.log("opened pronouns")});
        $("#consonantButton").click(() => {this.navigationContent('consonant');console.log("opened consonant")});
        $("#conjugationButton").click(() => {this.navigationContent('conjugation');console.log("opened conjugation")});
        
        $("#presentButton").click(() => {setTense('present');console.log("set present!");this.closeNav();console.log("closed menu")});
        $("#pastButton").click(() => {setTense('past');console.log("set past!");this.closeNav();console.log("closed menu")});
        $("#conditionalButton").click(() => {setTense('conditional');console.log("set conditional!");this.closeNav();console.log("closed menu")});

        $("#resetButton").click(() => {resetScore();console.log("reset score");this.closeNav();console.log("closed menu")});
        $("#aboutButton").click(() => {this.navigationContent('about');console.log("opened about")});
        
        $("#returnButton").click(() => {this.navigationContent('default');console.log("returned to main menu")});

    }

    openNav(key = 'default') {
        
        this.navigationContent(key);
        document.getElementById(this.wrapperID).style.width = "100%";
    }
    
    /* Set the width of the side navigation to 0 */
    closeNav() {
        document.getElementById(this.wrapperID).style.width = "0";
    };

    /*openHelp() {
        verbHelp.updateHtml();
        document.getElementById(this.wrapperID).style.width = "100%";
    }*/
    
    navigationContent(key = 'default') {
        if (key === 'help'){
            
            verbHelp.updateHtml();
        }
        else{
            const html = navigationHtmls[key];
            $("#" + this.wrapperID).html(html);
        }
       
        this.bindEvents();

    }


}
