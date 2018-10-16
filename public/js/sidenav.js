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
            const html = navigationHtmls[key];
            $("#" + this.wrapperID).html(html);
        }
       
        this.bindEvents();

    }


}
