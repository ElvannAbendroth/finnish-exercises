class SideNav {

    constructor (wrapperID) {
        this.wrapperID = wrapperID;
    }

    bindEvents(){
        $("#menuIcon").click(() => {this.openNav()});
        $("#helpIcon").click(() => {this.openNav('help')});
        $("#closeIcon").click(() => {this.closeNav()});
        $("#pronounButton").click(() => {this.navigationContent('pronoun')});
        $("#consonantButton").click(() => {this.navigationContent('consonant')});
        $("#conjugationButton").click(() => {this.navigationContent('conjugation')});
        
        $("#presentButton").click(() => {setTense('present');this.closeNav()});
        $("#pastButton").click(() => {setTense('past');this.closeNav();});
        $("#conditionalButton").click(() => {setTense('conditional');this.closeNav();});

        $("#resetButton").click(() => {resetScore();this.closeNav()});
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
