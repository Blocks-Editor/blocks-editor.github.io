
document.addEventListener("DOMContentLoaded", function(event) {
    const controller = new ScrollMagic.Controller();

    new ScrollMagic.Scene({
        triggerElement: '#slide-1',
        offset: 200
    })
        .on("start", () => {
            document.getElementById("slide-1-xxxx").classList.add('start');
        })
        .addTo(controller);

    // const tween = new TweenMax.to("#macbook-mockup", 1, {css: { transform: 'translateX(0)', opacity: 1}})

    new ScrollMagic.Scene({
        triggerElement: "#slide-1",
        offset: 300,
        // triggerHook: 0,
        // duration: 300
    })
        // .setTween(tween)
        .on("start", () => {
            document.getElementById("macbook-mockup").classList.add("untranslate");
        })
        .addTo(controller);
});
