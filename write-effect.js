document.addEventListener("DOMContentLoaded", function () {
  const text =
    "Let’s build something functional, fast, and user-friendly together";
  const el = document.getElementById("animated-headline");
  let i = 0;
  function type() {
    if (i <= text.length) {
      el.textContent = text.slice(0, i);
      i++;
      setTimeout(type, 70); // Slower typing speed
    }
  }
  type();
});

document.addEventListener("DOMContentLoaded", function () {
  const revealEls = document.querySelectorAll(".scroll-reveal");
  const revealOnScroll = () => {
    revealEls.forEach((el, i) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 60) {
        setTimeout(() => el.classList.add("revealed"), i * 300);
      }
    });
  };
  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll();
});
