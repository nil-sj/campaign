const today = new Date();
const year = today.getFullYear();

document.querySelectorAll(".year").forEach(eachElem => {
    eachElem.textContent = year;
});



const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach(link => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  });
});

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";

  if (pageYOffset >= 56) {
      if (!document.querySelector(".logo-box").classList.contains("hide")) {
          document.querySelector(".logo-box").classList.add("hide");
      }
  }

  if (pageYOffset < 56) {
      if (document.querySelector(".logo-box").classList.contains("hide")) {
        document.querySelector(".logo-box").classList.remove("hide");
      }
  }

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((navLink) => {
    navLink.classList.remove("active");
    if (navLink.classList.contains(current)) {
      navLink.classList.add("active");
    }
  });
});
