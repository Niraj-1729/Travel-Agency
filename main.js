const navBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");

navBtn.addEventListener("click", (e) => {
  if (navLinks.classList.contains("open")) {
    navLinks.classList.add("close");
    navLinks.addEventListener(
      "animationend",
      (e) => {
        navLinks.classList.remove("close");
        navLinks.classList.remove("open");
      },
      { once: true }
    );
  } else {
    navLinks.classList.add("open");
  }
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.add("close");
  navLinks.addEventListener(
    "animationend",
    (e) => {
      navLinks.classList.remove("close");
      navLinks.classList.remove("open");
    },
    { once: true }
  );
});