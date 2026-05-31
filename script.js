'use strict';

/**
 * 1. PRELOADER
 */
const preloader = document.querySelector("[data-preloader]");

window.addEventListener("load", () => {
  preloader.classList.add("remove");
});

/**
 * 2. MOBILE MENU TOGGLE
 */
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const navbar = document.querySelector("[data-navbar]");
const overlay = document.querySelector("[data-overlay]");

const toggleNav = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
}

// Add the click trigger event to your open icon, close icon, and backdrop overlay
navTogglers.forEach(toggler => {
  toggler.addEventListener("click", toggleNav);
});