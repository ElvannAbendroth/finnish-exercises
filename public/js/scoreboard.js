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

        this.successAnimation = new CombinedAnimation([
            new BootstrapAnimation('success-wrapper', 'bounce'),
            new CustomClassAnimation('success', 'active')
        ]);

        this.missedAnimation = new CombinedAnimation([
            new BootstrapAnimation('missed-wrapper', 'bounce'),
            new CustomClassAnimation('missed', 'active')
        ]);

        this.totalAnimation = new CombinedAnimation([
            new BootstrapAnimation('total-wrapper', 'bounce'),
            new CustomClassAnimation('totalScore', 'active')
        ]);
    }

    getSuccess() { return this.success; }

    getMissed() { return this.missed; }

    getTotal() { return this.total; }

    increaseSuccess() {
        this.success++;
        this.update()
        this.successAnimation.run();
    }

    increaseMissed() {
        this.missed++;
        this.update()
        this.missedAnimation.run();
    }

    increaseTotal() {
        this.total++;
        this.update()
        this.totalAnimation.run();
    }

    resetScore(){
        this.success = 0;
        this.missed = 0;
        this.total = 0;
        this.update()

    }

    update(){
        $('#success').html(this.success);
        $('#missed').html(this.missed);
        $('#totalExercises').html(this.total);
    }

}