// Select The Elements
var toggle_btn;
var big_wrapper;
var hamburger_menu;

function declare() {
  toggle_btn = document.querySelector(".toggle-btn");
  big_wrapper = document.querySelector(".big-wrapper");
  hamburger_menu = document.querySelector(".hamburger-menu");
}

const main = document.querySelector("main");

declare();

let dark = false;

function toggleAnimation() {
  // Clone the wrapper
  dark = !dark;
  let clone = big_wrapper.cloneNode(true);
  if (dark) {
    clone.classList.remove("light");
    clone.classList.add("dark");
  } else {
    clone.classList.remove("dark");
    clone.classList.add("light");
  }
  clone.classList.add("copy");
  main.appendChild(clone);

  document.body.classList.add("stop-scrolling");

  clone.addEventListener("animationend", () => {
    document.body.classList.remove("stop-scrolling");
    big_wrapper.remove();
    clone.classList.remove("copy");
    // Reset Variables
    declare();
    events();
  });
}

function events() {
  toggle_btn.addEventListener("click", toggleAnimation);
  hamburger_menu.addEventListener("click", () => {
    big_wrapper.classList.toggle("active");
  });
}

events();
// #######

// #######
const login = document.querySelector(".login-section");
const register = document.querySelector(".register-section");
const forgot = document.querySelector(".forgot-section");
// const role = document.querySelector(".role-section");
function openLogin() {
  register.style.display = "none";
  forgot.style.display = "none";
  login.style.display = "flex";
}
function closeLogin() {
  login.style.display = "none";
}
function openRegister() {
  login.style.display = "none";
  forgot.style.display = "none";
  register.style.display = "flex";
}
function closeRegister() {
  register.style.display = "none";
}
function openForgot() {
  login.style.display = "none";
  register.style.display = "none";
  forgot.style.display = "flex";
}
function closeForgot() {
  forgot.style.display = "none";
}
// function openRole() {
//   login.style.display = "none";
//   register.style.display = "none";
//   forgot.style.display = "none";
//   role.style.display = "flex";
// }
// function closeForgot() {
//   forgot.style.display = "none";
// }
