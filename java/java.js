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


let lastScroll = 0;
let navHeight = myNav.getBoundingClientRect().height;




container.onscroll = function () {
  
  "use strict";
  /* If scrolling 280px or more navbar changes its colour */
  let scroll = container.scrollTop;  // scrolling value
  
 
 
  

 

  if (scroll > lastScroll) {
    if (lastScroll > navHeight) {
      myNav.classList.add('hide');    // when scrolling over nav height it goes hide
      span.classList.add('jesus');    // h1 my name disappear
    }
  } else if (scroll < lastScroll) {
    myNav.classList.remove('hide');
    span.classList.remove('jesus');
  }
  lastScroll = scroll;
  
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


