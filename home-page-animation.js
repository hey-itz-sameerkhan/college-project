// ⭐ Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);


// ✅ Initialize Locomotive Scroll
function loco() {
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
  }
  loco();






// ✅ Hero Section Load Animations
gsap.from(".luxury-tag", {
  y: 30,
  opacity: 0,
  delay: 2,
  duration: 1,
  ease: "power3.out",
});

gsap.from(".main-heading", {
  y: 80,
  opacity: 0,
  delay: 2.3,
  duration: 1,
  ease: "power4.out",
});

gsap.from(".cover-line", {
  opacity: 0,
  delay: 2.7,
  duration: 1.5,
  ease: "sine.out",
});

gsap.from(".button-group", {
  y: 40,
  opacity: 0,
  delay: 3,
  duration: 1.7,
  ease: "back.out(1.7)",
});






// ✅ ABOUT SECTION ANIMATIONS (on enter only)
function runAboutAnimation() {
    // Animate Left Image
    gsap.fromTo(".about-img", {
      scale: 0.7,
      rotateY: 20,
      opacity: 0,
    }, {
      scale: 1,
      rotateY: 0,
      opacity: 1,
      duration: 3.2,  // Increased duration to slow down
      ease: "power4.out",
    });
  
    // Animate Right Section
    gsap.fromTo(".about-right", {
      y: 150,
      opacity: 0,
      rotateZ: 4,
      scale: 0.95,
    }, {
      y: 0,
      opacity: 1,
      rotateZ: 0,
      scale: 1,
      duration: 4,  // Increased duration to slow down
      ease: "expo.out",
    });
  
    // Animate Heading
    gsap.fromTo(".about-right h3", {
      y: 80,
      opacity: 0,
      scale: 0.9,
    }, {
      y: 0,
      opacity: 1,
      scale: 1,
      duration: 2.5,  // Increased duration to slow down
      ease: "bounce.out",
    });
  
    // Animate Paragraphs
    gsap.fromTo(".features p", {
      x: 80,
      opacity: 0,
      scale: 0.8,
    }, {
      x: 0,
      opacity: 1,
      scale: 1,
      duration: 2.5,  // Increased duration to slow down
      stagger: 0.3,  // Slower stagger
      ease: "back.out(1.7)",
    });
  
    // Animate Button
    gsap.fromTo(".learn-more-btn", {
      scale: 0,
      opacity: 0,
    }, {
      scale: 1,
      opacity: 1,
      duration: 2.5,  // Increased duration to slow down
      ease: "elastic.out(1, 0.5)",
    });
  }
  
  // 💡 Step 2: Use ScrollTrigger to call the function on scroll entry
  ScrollTrigger.create({
    trigger: ".about-us",
    scroller: "#main",
    start: "top 65%",
    endTrigger: ".learn-more-btn",
    end: "bottom 10%",
    onEnter: runAboutAnimation,
    onEnterBack: runAboutAnimation,
  });
  
  // 💡 Step 3: Ensure the animations play properly during scroll
  ScrollTrigger.create({
    trigger: ".about-left", // ya section wrapper
    scroller: "#main",
    start: "top 65%",
    end: "bottom 10%",
    onEnter: () => runAboutAnimation(),
    onEnterBack: () => runAboutAnimation(),
    onLeave: () => runAboutAnimation(),
    onLeaveBack: () => runAboutAnimation(),
  });
  

  // ✅ Special Tour Section Animation
// ✅ DESTINATIONS SECTION ANIMATIONS
function runDestinationsAnimation() {
  gsap.fromTo(".left-content", 
    { x: -100, opacity: 0 }, 
    { x: 0, opacity: 1, duration: 2, ease: "power2.out" }
  );

  gsap.fromTo(".right-cards", 
    { x: 100, opacity: 0 }, 
    { x: 0, opacity: 1, duration: 2, ease: "power2.out" }
  );
}

ScrollTrigger.create({
  trigger: ".destinations",
  scroller: "#main",
  start: "top 55%",
  end: "bottom 30%",
  onEnter: () => runDestinationsAnimation(),
  onEnterBack: () => runDestinationsAnimation(),
  onLeave: () => runDestinationsAnimation(),
  onLeaveBack: () => runDestinationsAnimation(),
});




// ✅ FOOTER CTA SECTION ANIMATIONS
// 💖 FOOTER CTA - Scale + Fade + Bounce Animation
function runFooterCTAAnimation() {
  gsap.fromTo(".footer-left", 
    { scale: 0.8, opacity: 0 }, 
    { scale: 1, opacity: 1, duration: 2.5, ease: "bounce.out" }
  );

  gsap.fromTo(".footer-right", 
    { scale: 0.8, opacity: 0 }, 
    { scale: 1, opacity: 1, duration: 2.5, ease: "bounce.out", delay: 0.2 }
  );
}

ScrollTrigger.create({
  trigger: ".footer-cta",
  scroller: "#main",
  start: "top 70%",
  end: "bottom 30%",
  onEnter: () => runFooterCTAAnimation(),
  onEnterBack: () => runFooterCTAAnimation(),
  onLeave: () => runFooterCTAAnimation(),
  onLeaveBack: () => runFooterCTAAnimation(),
});




