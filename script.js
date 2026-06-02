'use strict';

/**
 * 1. PRELOADER HIDING
 */
const preloader = document.querySelector("[data-preloader]");

if (preloader) {
  window.addEventListener("load", () => {
    preloader.classList.add("remove");
  });
}

/**
 * 2. MOBILE MENU TOGGLE LOGIC
 */
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const navbar = document.querySelector("[data-navbar]");
const overlay = document.querySelector("[data-overlay]");

const toggleNav = function () {
  if (navbar && overlay) {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("nav-active");
  }
}

// Add event listeners loop safely across all nodes matching the data attribute
navTogglers.forEach(toggler => {
  toggler.addEventListener("click", toggleNav);
});

/**
 * 3. STICKY HEADER SCROLL STATE
 */
const header = document.querySelector("[data-header]");

if (header) {
  window.addEventListener("scroll", function () {
    if (window.scrollY > 100) {
      header.classList.add("active");
    } else {
      header.classList.remove("active");
    }
  });
}
