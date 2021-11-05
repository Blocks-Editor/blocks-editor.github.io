
const controller = new ScrollMagic.Controller();

new ScrollMagic.Scene({
    triggerElement: '#slide-1',
    offset: 300
})
    .on("start", () => {
        document.getElementById("slide-1-xxxx").classList.add('start');
    })
    .addTo(controller);

// new ScrollMagic.Scene({
//     triggerElement: "#slide-1",
//     triggerHook: 0,
//     duration: 300
// })
//     .setTween(new TweenMax.to("#macbook-mockup", 0.5, {css: {transform: 'translate3d(-500px, 0, 0)'}}))
//     .addTo(controller);
