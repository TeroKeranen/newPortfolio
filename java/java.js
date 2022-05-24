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

const container = document.querySelector(".container");           // Selecting container
const myNav = document.querySelector(".navi");                    // selecting whole navbar
const logo = document.querySelector(".logo");                     // selectin navbar logo
const burgerDiv = document.querySelectorAll(".burger-div");       // selecting navbar burger divs (mobile)
const nav1 = document.querySelectorAll(".linkit");                // selecting navbar links
const span = document.querySelector('.span-title');



container.onscroll = function () {
  
  "use strict";
  /* If scrolling 280px or more navbar changes its colour */

  if (container.scrollTop >= 50 ||  document.documentElement.scrollTop >= 50){
    span.classList.add('jesus');

  }
  if (container.scrollTop >= 280 || document.documentElement.scrollTop >= 280) {
    
    myNav.classList.add("NavScroll");                 // Changing nav background to white when scrolling down
    
    logo.classList.add("NavTextScroll");            // changing logos background to white when scrolling down
    
    nav.classList.add("mobileNavBackground");         // Mobile version changing nav links background to white when scrolling down

    
    burgerDiv.forEach(function (item) {               // iterate burger divs and change burger color to black
      item.classList.add("burgerToBlack");
    });

    
    nav1.forEach(function (item) {                    // iterate all navbar links and changin the color to black
      item.classList.add("NavTextScroll");
    });
  } else {
    
    myNav.classList.remove("NavScroll");              // changing navbar background back to black
    
    logo.classList.remove("NavTextScroll");           // Changing logo back to white
    
    nav.classList.remove("mobileNavBackground");      // changing mobile background back to black
    span.classList.remove('jesus');

    
    nav1.forEach(function (item) {                    // changing navbar links back to white
      item.classList.remove("NavTextScroll");
    });
    
    burgerDiv.forEach(function (item) {               // Changing navbar burger back to white
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

  //when clicking mobile navbar link this move links aside
  nav.classList.remove('nav-active');
}


for (let i = 0; i < joumaan.length; i++) {
  joumaan[i].addEventListener('click', menuLink);
}


