console.log("Hello World");

const navSlide = () => {
  const menuBurger = document.querySelector(".menu-container");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");
  
  // Toggle Nav
  menuBurger.addEventListener("click", () => {
    // Animate Links
    nav.classList.toggle("nav-active");

    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.1s ease forwards ${
          index / 5
        }s`;
      }
    });

    // Burger Animation
    menuBurger.classList.toggle("toggle")
  });
};

navSlide();
