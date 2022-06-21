/*---show menu---------*/
function showMenu() {
  const ul = document.querySelector(".nav__menu");
  ul.style.right = "0";
  ul.style.zIndex = "400";
  ul.style.transition = "1s";
  const home = document.getElementById("home");
  home.style.zIndex = "-20";
}
// Active and Remove Menu
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  //active link
  navLink.forEach((n) => n.classList.remove("active"));
  this.classList.add("active");

  //Remove menu mobile
  const navMenu = document.querySelector(".nav__menu");
  navMenu.style.right = "-80%";
  navMenu.style.transition = "1s";
  const home2 = document.getElementById("home");
  home2.style.zIndex = "2";
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*---DarkMode.js framework-------*/
function addDarkmodeWidget() {
  new Darkmode().showWidget();
}
const options = {
  bottom: "64px", // default: '32px'
  right: "unset", // default: '32px'
  left: "32px", // default: 'unset'
  time: "0.5s", // default: '0.3s'
  mixColor: "#fff", // default: '#fff'
  backgroundColor: "#fff", // default: '#fff'
  buttonColorDark: "#4070F4", // default: '#100f2c'
  buttonColorLight: "#fff", // default: '#fff'
  saveInCookies: false, // default: true,
  label: "🌓", // default: ''
  autoMatchOsTheme: true, // default: true
};

const darkmode = new Darkmode(options);
darkmode.showWidget();

// Scrolling text in the About section
var i = 0,
  text;
text = "Who am I?";

function typing() {
  if (i < text.length) {
    document.getElementById("info__subtitle").innerHTML += text.charAt(i);
    i++;
    setTimeout(typing, 500);
  }
}
typing();
