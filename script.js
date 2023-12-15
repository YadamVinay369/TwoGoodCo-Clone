const locomotiveAnimation = () => {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });

  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },

    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
};
locomotiveAnimation();

const navbarAnimation = () => {
  gsap.to("#nav-1 svg", {
    transform: "translateY(-110%)",
    scrollTrigger: {
      trigger: "#page1",
      scroller: "#main",
      start: "top 0",
      end: "top -5%",
      scrub: true,
    },
  });

  gsap.to("#nav-2 #links", {
    transform: "translateY(-100%)",
    opacity: 0,
    scrollTrigger: {
      trigger: "#page1",
      scroller: "#main",
      start: "top 0",
      end: "top -5%",
      scrub: true,
    },
  });
};
navbarAnimation();

const videoconAnimation = () => {
  var videocon = document.querySelector("#video-container");
  var playbtn = document.querySelector("#play");

  videocon.addEventListener("mouseenter", () => {
    gsap.to(playbtn, {
      scale: 1,
      opacity: 1,
    });
  });

  videocon.addEventListener("mouseleave", () => {
    gsap.to(playbtn, {
      scale: 0,
      opacity: 0,
    });
  });

  videocon.addEventListener("mousemove", (dets) => {
    gsap.to(playbtn, {
      left: dets.x - 70,
      top: dets.y - 80,
    });
  });
};
videoconAnimation();

const loadingAnimation = () => {
  gsap.from("#page1 h1", {
    y: 100,
    opacity: 0,
    delay: 0.5,
    duration: 0.9,
    stagger: 0.3,
  });

  gsap.from("#page1 #video-container", {
    scale: 0.9,
    opacity: 0,
    delay: 1.3,
    duration: 0.5,
  });
};
loadingAnimation();

const cursorAnimation = () => {
  document.addEventListener("mousemove", (dets) => {
    gsap.to("#cursor", {
      left: dets.x,
      top: dets.y,
    });
  });

  document.querySelector("#child1").addEventListener("mouseenter", () => {
    gsap.to("#cursor", {
      transform: "translate(-50%,-50%) scale(1)",
      backgroundColor: "#F7F2EC",
    });
  });

  document.querySelector("#child1").addEventListener("mouseleave", () => {
    gsap.to("#cursor", {
      transform: "translate(-50%,-50%) scale(0)",
    });
  });

  document.querySelector("#child2").addEventListener("mouseenter", () => {
    gsap.to("#cursor", {
      transform: "translate(-50%,-50%) scale(1)",
      backgroundColor: "##ECECEC",
    });
  });
  document.querySelector("#child2").addEventListener("mouseleave", () => {
    gsap.to("#cursor", {
      transform: "translate(-50%,-50%) scale(0)",
    });
  });

  document.querySelector("#child3").addEventListener("mouseenter", () => {
    gsap.to("#cursor", {
      transform: "translate(-50%,-50%) scale(1)",
      backgroundColor: "#EDE6E6",
    });
  });
  document.querySelector("#child3").addEventListener("mouseleave", () => {
    gsap.to("#cursor", {
      transform: "translate(-50%,-50%) scale(0)",
    });
  });

  document.querySelector("#child4").addEventListener("mouseenter", () => {
    gsap.to("#cursor", {
      transform: "translate(-50%,-50%) scale(1)",
      backgroundColor: "#D6E0E0",
    });
  });
  document.querySelector("#child4").addEventListener("mouseleave", () => {
    gsap.to("#cursor", {
      transform: "translate(-50%,-50%) scale(0)",
    });
  });
};
cursorAnimation();
