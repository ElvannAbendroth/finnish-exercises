class BootstrapAnimation {

    constructor (elementId, animationClass, instaneous) {
        this.elementId = elementId;
        this.animationClass = animationClass;
        this.instaneous = instaneous;
    }

    run() {
        const element = $('#' + this.elementId);

        if (this.instaneous) {
            element.addClass(this.animationClass);
            setTimeout(() => { element.removeClass(this.animationClass); }, 1000);
        } else {
            element.addClass(this.animationClass, 500, () => {
                element.removeClass(this.animationClass, 200);
            });
        }
    }

}