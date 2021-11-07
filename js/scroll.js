
document.addEventListener("DOMContentLoaded", function(event) {
    const controller = new ScrollMagic.Controller();

    new ScrollMagic.Scene({
        triggerElement: '#slide-1',
        offset: 300
    })
        .on("start", () => {
            document.getElementById("slide-1-xxxx").classList.add('start');
        })
        .addTo(controller);

    const tween = new TweenMax.to("#macbook-mockup", 1, {css: { transform: 'translateX(0)', opacity: 1}})

    new ScrollMagic.Scene({
        triggerElement: "#slide-1",
        offset: -400,
        triggerHook: 0,
        duration: 300
    })
        .setTween(tween)
        .addTo(controller);
});
