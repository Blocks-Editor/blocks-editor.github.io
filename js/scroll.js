
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


    new ScrollMagic.Scene({
        triggerElement: "#slide-2",
        offset: 300
    })
        .on("start", () => {
            document.getElementById("slide-2-slashes").classList.add("start");
            document.getElementById("card-1").classList.add("bump");
            document.getElementById("card-2").classList.add("bump", "delay-1s");
            document.getElementById("card-3").classList.add("bump", "delay-2s");
            setTimeout(()=> {
                document.getElementById("card-1").classList.add("hover-scale");
                document.getElementById("card-2").classList.add("hover-scale");
                document.getElementById("card-3").classList.add("hover-scale");
            }, 3000);
        })
        .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: '#slide-3',
        offset: 300
    })
        .on("start", () => {
            document.getElementById("slide-3-circles").classList.add('start');
        })
        .addTo(controller);
});
