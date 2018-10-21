class ScoreBoard {

    constructor (wrapperId) {
        this.wrapperId = wrapperId;
        this.success = 0;
        this.missed = 0;
        this.total = 0;

        $('#' + this.wrapperId).html(
            `<div class="d-flex">
                <div id="success-wrapper" class="flex-grow-1">
                    <span id="success" class="score-number ">${this.success}</span><br>
                    <i id="success-icon" class="material-icons p-2 d-block d-sm-none">check</i>
                    <span id="success-text" class="d-none d-sm-block p-2">success</span>
                </div>
                <div id="missed-wrapper" class="flex-grow-2">
                    <span id="missed" class="score-number ">${this.missed}</span><br>
                    <i id="missed-icon" class="material-icons p-2 d-block d-sm-none">clear</i>
                    <span id="missed-text" class="d-none d-sm-block p-2">missed</span>
                </div>
                <div id="total-wrapper" class="flex-grow-1">
                    <span id="totalExercises" class="score-number ">${this.total}</span><br>
                    <i id="total-icon" class="material-icons p-2 d-block d-sm-none">panorama_fish_eye</i>
                    <span id="total-text" class="d-none d-sm-block p-2">total</span>
                </div>
            </div>`
        );

        this.successAnimation = new BootstrapAnimation('success-wrapper', 'animated bounce', true);
        this.missedAnimation = new BootstrapAnimation('missed-wrapper', 'animated bounce', true);
        this.totalAnimation = new BootstrapAnimation('total-wrapper', 'animated bounce', true);
    }

    getSuccess() { return this.success; }

    getMissed() { return this.missed; }

    getTotal() { return this.total; }

    increaseSuccess() {
        this.total++;
        $('#success').html(this.total)
        this.successAnimation.run();
    }

    increaseMissed() {
        this.missed++;
        $('#missed').html(this.missed);
        this.missedAnimation.run();
    }

    increaseTotal() {
        this.total++;
        $('#totalExercises').html(this.total);
        this.totalAnimation.run();
    }

    resetScore(){
        this.success = 0;
        this.missed = 0;
        this.total = 0;
    }

}