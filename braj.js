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



// ⭐ Navbar Slide In on Page Load
gsap.from("#nav", {
  y: -100,
  opacity: 0,
  duration: 2, // Slower duration for navbar slide
  ease: "power4.out",
  onComplete: function() {
    // Animate the logo to pop in first
    gsap.from("#nav img", {
      y: -30,
      opacity: 0,
      duration: 2, // Slower duration for logo
      ease: "power3.out",
    });

    // After the logo pops in, animate the navbar buttons sequentially
    const navButtons = document.querySelectorAll(".nav-button");
    gsap.from(navButtons, {
      opacity: 0,
      y: 30,
      duration: 1.5,
      ease: "power3.out",
      stagger: 0.4, // Each button will animate with a staggered delay of 0.4 seconds
      delay: 2, // Start after the logo has popped in
    });
  }
});


// ⭐ Hero Section Load Animation
gsap.from(".luxury-tag", {
  y: 30,
  opacity: 0,
  delay: 2, // Increased delay for smooth transition
  duration: 2, // Slower duration
  ease: "power3.out",
});

gsap.from(".main-heading", {
  y: 80,
  opacity: 0,
  delay: 2.3, // Adjusted delay for better flow
  duration: 2, // Slower duration
  ease: "power4.out",
});

gsap.from(".cover-line", {
  opacity: 0,
  delay: 2.7, // Adjusted delay
  duration: 1.5, // Slower duration
  ease: "sine.out",
});

gsap.from(".button-group", {
  y: 40,
  opacity: 0,
  delay: 3, // Adjusted delay for better sync
  duration: 1.7, // Slower duration
  ease: "back.out(1.7)",
});







// ✅ Final Infinite Scroll Fix — Smooth like Incredible India
function scrollAttractions(direction) {
  const container = document.getElementById("attraction-scroll");
  const cards = container.querySelectorAll(".attraction-card");
  const cardWidth = cards[0].offsetWidth + 25;

  if (direction === 1) {
    container.scrollBy({ left: cardWidth, behavior: "smooth" });
    setTimeout(() => {
      const first = container.querySelector(".attraction-card");
      container.appendChild(first);
      container.scrollLeft -= cardWidth;
    }, 400);
  } else {
    const last = cards[cards.length - 1];
    container.insertBefore(last, cards[0]);
    container.scrollLeft += cardWidth;
    setTimeout(() => {
      container.scrollBy({ left: -cardWidth, behavior: "smooth" });
    }, 20);
  }
}

// ✅ Navbar scroll animation
gsap.to("#nav", {
  backgroundColor: "#000",
  duration: 1,
  height: "110px",
  scrollTrigger: {
    trigger: "#nav",
    scroller: "#main",
    start: "top -10%",
    end: "top -11%",
    scrub: 1,
    onEnter: () => document.getElementById("nav").classList.add("scrolled"),
    onLeaveBack: () => document.getElementById("nav").classList.remove("scrolled")
  }
});


// ✅ Hero background transition
gsap.to("#down", {
  backgroundColor: "#000",
  scrollTrigger: {
    trigger: "#down",
    scroller: "#main",
    start: "top -25%",
    end: "top -70%",
    scrub: 2,
  },
});


// const aboutImg = document.querySelector('.about-img');
// aboutImg.addEventListener('mousemove', (e) => {
//   const bounds = aboutImg.getBoundingClientRect();
//   const x = e.clientX - bounds.left;
//   const y = e.clientY - bounds.top;
//   const centerX = bounds.width / 2;
//   const centerY = bounds.height / 2;
//   const rotateX = ((y - centerY) / centerY) * 10;
//   const rotateY = ((x - centerX) / centerX) * -10;

//   aboutImg.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
//   aboutImg.style.transition = `transform 0.1s ease`;
// });

// aboutImg.addEventListener('mouseleave', () => {
//   aboutImg.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)';
// });



//🖼️ Animate left image
gsap.from(".about-left", {
  x: -150,
  scale: 0.9,
  opacity: 0,
  ease: "power4.out",
  scrollTrigger: {
    trigger: ".about-left",
    scroller: "#main",
    start: "top 95%",
    end: "top 20%",
    scrub: 2,
  },
});

// 🖊️ Animate right text content
gsap.from(".about-right", {
  x: 150,
  scale: 0.95,
  opacity: 0,
  ease: "power4.out",
  scrollTrigger: {
    trigger: ".about-right",
    scroller: "#main",
    start: "top 95%",
    end: "top 20%",
    scrub: 2,
  },
});







gsap.from("#colon1", {
  y: -70,
  x: -70,
  scrollTrigger: {
    trigger: "#colon1",
    scroller: "#main",
    start: "top 55%",
    end: "top 45%",
    scrub: 4,
  },
});

gsap.from("#colon2", {
  y: 70,
  x: 70,
  scrollTrigger: {
    trigger: "#colon1",
    scroller: "#main",
    start: "top 55%",
    end: "top 45%",
    scrub: 4,
  },
});

gsap.from("#page4 h1", {
  y: 50,
  scrollTrigger: {
    trigger: "#page4 h1",
    scroller: "#main",
    start: "top 75%",
    end: "top 70%",
    scrub: 3,
  },
});
