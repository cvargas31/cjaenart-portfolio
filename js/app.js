// Mobile Menu
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

function onClick(element) {
  document.getElementById("img01").src = element.src;
  document.getElementById("modal01").style.display = "block";
}

navSlide();


// Filter Gallery

filterObjects("all")

function filterObjects(c,e) {
  var x, i;
  x = document.getElementsByClassName("card");
  if (c == "all") c ="";
  for (i = 0; i < x.length; i++) {
    removeClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) addClass(x[i], "show");
  }
}

function addClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if(arr1.indexOf(arr2[i] == -1)){
      element.className += " " + arr2[i];
    }
  }
}

function removeClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++){
    while (arr1.indexOf(arr2[i]) > -1){
      arr1.splice(arr1.indexOf(arr2[i]), 1)
    }
  }
  element.className = arr1.join(" ");
}


// adding active class to buttons 

let buttons = document.querySelectorAll('button');
buttons.forEach(button => {
  button.addEventListener('click', function () {
    buttons.forEach(btn => btn.classList.remove('active'));
    this.classList.add('active')
  })
})