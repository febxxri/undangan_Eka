  
let audio = document.getElementById("audio");
let play = document.getElementById("open-btn");
let mute = document.getElementById("mute");

play.addEventListener("click", function () {
  audio.play();
});

mute.addEventListener("click", function () {
  audio.muted = !audio.muted;
});

document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("nav-menu");

  hamburger.addEventListener("click", function () {
    navMenu.classList.toggle("active");
    hamburger.classList.toggle("active");
  });

  document.addEventListener("click", function (event) {
    if (!hamburger.contains(event.target) && !navMenu.contains(event.target)) {
      navMenu.classList.remove("active");
      hamburger.classList.remove("active");
    }
  });
});

function copy() {
  navigator.clipboard.writeText("444-444-444");
  alert("copied");
}