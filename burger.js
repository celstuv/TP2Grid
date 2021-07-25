const burger = document.querySelector(".burger");
var menu = document.querySelector(".menu");
var main = document.querySelector(".main");
var footer = document.querySelector(".footer");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  menu.classList.toggle("appears");
  // document.body.style.overflowY = "hidden";
  main.classList.toggle("disappears");
  footer.classList.toggle("disappears");
});

