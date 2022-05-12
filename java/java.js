/* select hamburger menus classes */
const nav = document.querySelector(".nav-links");
const ham = document.querySelector(".burger");
const joumaan = document.querySelectorAll('header nav a');


// Function that open navbars link list
const slideIt = function () {
  ham.addEventListener("click", function () {
    nav.classList.toggle("nav-active");
    console.log("clicked");
  });
};

const container = document.querySelector(".container"); // Selecting container
const myNav = document.querySelector(".navi"); // selecting whole navbar
const logo = document.querySelector(".logo"); // selectin navbar logo
const burgerDiv = document.querySelectorAll(".burger-div"); // selecting navbar burger divs (mobile)
const nav1 = document.querySelectorAll(".linkit"); // selecting navbar links



container.onscroll = function () {
  
  "use strict";
  /* If scrolling 280px or more navbar changes its colour */
  if (container.scrollTop >= 280 || document.documentElement.scrollTop >= 280) {
    // Changing nav background to white when scrolling down
    myNav.classList.add("NavScroll");
    // changing logos background to white when scrolling down
    logo.classList.add("NavTextScroll");
    // Mobile version changing nav links background to white when scrolling down
    nav.classList.add("mobileNavBackground");

    // iterate burger divs and change burger color to black
    burgerDiv.forEach(function (item) {
      item.classList.add("burgerToBlack");
    });

    // iterate all navbar links and changin the color to black
    nav1.forEach(function (item) {
      item.classList.add("NavTextScroll");
    });
  } else {
    // changing navbar background back to black
    myNav.classList.remove("NavScroll");
    // Changing logo back to white
    logo.classList.remove("NavTextScroll");
    // changing mobile background back to black
    nav.classList.remove("mobileNavBackground");

    // changing navbar links back to white
    nav1.forEach(function (item) {
      item.classList.remove("NavTextScroll");
    });
    // Changing navbar burger back to white
    burgerDiv.forEach(function (item) {
      item.classList.remove("burgerToBlack");
    });
  }
};



slideIt();



/// Smoot navbar movement in mobile version
function menuLink(e) {
  e.preventDefault();

  let sectionEl = document.querySelector(this.hash);

  sectionEl.scrollIntoView({behavior: "smooth"})

  nav.classList.remove('nav-active');
}


for (let i = 0; i < joumaan.length; i++) {
  joumaan[i].addEventListener('click', menuLink);
}


