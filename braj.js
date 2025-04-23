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





//⭐ Navbar background transition on scroll
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
    onLeaveBack: () => document.getElementById("nav").classList.remove("scrolled"),
  },
});




// ✅ Hero background transition on scroll
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






// ✅ Smooth Scroll for Attractions (Infinite Scroll)
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




// ✅ Parallax 3D Hover Effect on About Image
const aboutImg = document.querySelector('.about-img');
aboutImg.addEventListener('mousemove', (e) => {
  const bounds = aboutImg.getBoundingClientRect();
  const x = e.clientX - bounds.left;
  const y = e.clientY - bounds.top;
  const centerX = bounds.width / 2;
  const centerY = bounds.height / 2;
  const rotateX = ((y - centerY) / centerY) * 10;
  const rotateY = ((x - centerX) / centerX) * -10;

  aboutImg.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
  aboutImg.style.transition = `transform 0.2s ease`;
});

aboutImg.addEventListener('mouseleave', () => {
  aboutImg.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)';
});





//💻 ✅ Smooth Scroll for gem - section (Infinite Scroll)
function scrollGems(direction) {
  const container = document.getElementById("gems-scroll");
  const cards = container.querySelectorAll(".gem-card");
  const cardWidth = cards[0].offsetWidth + 40; // match your CSS gap: 40px

  if (direction === 1) {
    // 👉 Right scroll
    container.scrollBy({ left: cardWidth, behavior: "smooth" });
    setTimeout(() => {
      const first = container.querySelector(".gem-card");
      container.appendChild(first);
      container.scrollLeft -= cardWidth;
    }, 400); // wait till scroll ends
  } else {
    // 👈 Left scroll
    container.scrollLeft -= cardWidth;
    setTimeout(() => {
      const last = cards[cards.length - 1];
      container.insertBefore(last, cards[0]);
    }, 400); // wait till scroll ends
  }
}



//🚀Travel Diaries Auto Scroll
const scrollContainer = document.getElementById('scrollContainer');
let animationFrameId;
let isScrolling = true;

function autoScroll() {
  if (!isScrolling) return;

  scrollContainer.scrollLeft += 3; // 💫 Smooth speed

  // 🔁 Infinite loop
  if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
    scrollContainer.scrollLeft = 0;
  }

  animationFrameId = requestAnimationFrame(autoScroll);
}

function startAutoScroll() {
  isScrolling = true;
  cancelAnimationFrame(animationFrameId);
  autoScroll();
}

function stopAutoScroll() {
  isScrolling = false;
  cancelAnimationFrame(animationFrameId);
}

// 🖱️ Pause on hover
scrollContainer.addEventListener('mouseenter', stopAutoScroll);
scrollContainer.addEventListener('mouseleave', startAutoScroll);

// 🚀 Start on load
window.addEventListener('load', startAutoScroll);







// 💫 Preloader Logic
window.addEventListener("load", () => {
  const loader = document.getElementById("preloader");
  // fade out with gsap
  gsap.to(loader, {
    opacity: 0,
    duration: 0.5,
    onComplete: () => loader.style.display = "none"
  });
});


// ✅ Page 4 Heading Animation
gsap.from("#page4 h1", {
  y: 50,
  scrollTrigger: {
    trigger: "#page4 h1",
    scroller: "#main",
    start: "top 75%",
    end: "top 70%",
    scrub: 6
  },
});





document.getElementById("theme-toggle").addEventListener("click", () => {
  document.documentElement.classList.toggle("light-mode");
  localStorage.setItem(
    "theme",
    document.documentElement.classList.contains("light-mode") ? "light" : "dark"
  );
});
