gsap.registerPlugin(ScrollTrigger);

const coolVideo = document.querySelector("video");

let sections = gsap.utils.toArray(".step");
sections.forEach((step, i) => {
    ScrollTrigger.create({
        trigger:step,
        start:"bottom bottom",
        end: "+=2000",
        pin: true,
        anticipatePin: 1,
    });

let tl = gsap.timeline({
  scrollTrigger: {
    trigger: "video",
    start: "top top",
    end: "+=7500",
    scrub: true,
  }
});

coolVideo.onloadedmetadata = function () {
  tl.to(coolVideo, { currentTime: coolVideo.duration });
};    
    // gsap.fromTo(bgVideo, { currentTime: 3 * i }, {
    //     ScrollTrigger: {
    //         trigger:step,
    //         scrub:2,
    //         start: "top bottom",
    //         end: "bottom bottom",
    //     },
    //     currentTime: 3 * (i + 1),
    //     duration: 1,
    //     ease: "none",
    // });
})
