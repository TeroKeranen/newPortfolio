/* Hambugher menu start */
const nav = document.querySelector(".nav-links");
const ham = document.querySelector(".burger");

const slideIt = function () {
  ham.addEventListener("click", function () {
    nav.classList.toggle("nav-active");
    console.log("clicked");
  });
};

const container = document.querySelector(".container");
const myNav = document.querySelector(".navi");
const logo = document.querySelector(".logo");
const burgerDiv = document.querySelectorAll(".burger-div");
const nav1 = document.querySelectorAll(".linkit");

container.onscroll = function () {
  "use strict";
  if (container.scrollTop >= 280 || document.documentElement.scrollTop >= 280) {
    myNav.classList.add("scroll");
    logo.classList.add("scroll2");
    nav.classList.add("scroll4");
    burgerDiv.forEach(function (item) {
      item.classList.add("scroll3");
    });

    nav1.forEach(function (item) {
      item.classList.add("scroll2");
    });
  } else {
    myNav.classList.remove("scroll");
    logo.classList.remove("scroll2");
    nav.classList.remove("scroll4");

    nav1.forEach(function (item) {
      item.classList.remove("scroll2");
    });

    burgerDiv.forEach(function (item) {
      item.classList.remove("scroll3");
    });
  }
};

slideIt();
