"use strict";

const bar = document.querySelector(".bar");
let navTop = document.querySelector(".nav-top i");
let nav = document.querySelector("nav");
let navLinks = document.querySelectorAll(".nav-list li");
let header = document.querySelector("header");
let overlay = document.querySelector(".overlay");
let links = Array.from(navLinks);
links.forEach((element) => {
  element.addEventListener("click", () => {
    nav.classList.remove("active");
  });
});

navTop.addEventListener("click", () => {
  nav.classList.toggle("active");
});

overlay.addEventListener("click", () => {
  nav.classList.remove("active");
});

bar.addEventListener("click", () => {
  nav.classList.toggle("active");
  overlay.classList.add("active");
});

window.addEventListener("scroll", () => {
  window.scrollY > 50
    ? header.classList.add("active")
    : header.classList.remove("active");
});
