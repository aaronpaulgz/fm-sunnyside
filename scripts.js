let hamburger = document.getElementById("hamburger");
let mobMenu = document.getElementById("mob_menu");

const toggle = () => {
  if (mobMenu.style.display === "none") {
    mobMenu.style.display = "block";
  } else {
    mobMenu.style.display = "none";
  }
};
