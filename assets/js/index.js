const openNavIcon = document.querySelector(".nav-icon");
const closeNavIcon = document.querySelector(".close");
const toggleNavBar = document.querySelector(".close-navbar");
const navList = document.querySelectorAll(".nav-list");

const handleClick = () => {
  toggleNavBar.classList.toggle("open-navbar");
};

openNavIcon.addEventListener("click", handleClick);
closeNavIcon.addEventListener("click", handleClick);

navList.forEach((navItem) => {
  navItem.addEventListener("click", handleClick);
});