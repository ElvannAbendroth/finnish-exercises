// For grouping multiple animations to one
class CombinedAnimation {

    constructor (animations) {
        this.animations = animations;
    }

    run() {
        this.animations.forEach(animation => {
            animation.run();
        });
    }
}

// For example adding class "active" to element for a moment
// new CustomClassAnimation('elementId', 'active')
class CustomClassAnimation {

    constructor (elementId, animationClass) {
        this.elementId = elementId;
        this.animationClass = animationClass;
    }

    run() {
        const element = $('#' + this.elementId);
        element.addClass(this.animationClass, 500, () => {
            element.removeClass(this.animationClass, 200);
        });
    }
}

// For example applying bounce animation to an element
// new BootstrapAnimation('elementId', 'bounce')
class BootstrapAnimation {
    constructor (elementId, animationClass) {
        this.elementId = elementId;
        this.animationClass = animationClass;
    }

    run() {
        const element = $('#' + this.elementId);
        element.addClass('animated ' + this.animationClass);
        setTimeout(() => { element.removeClass(this.animationClass); }, 1000);
    }

}