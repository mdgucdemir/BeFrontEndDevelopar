// select all links
const navLink = document.querySelectorAll(".nav-link");

// add click event all links
navLink.forEach((link) => {
  link.addEventListener("click", function () {
    // remove active link all links
    navLink.forEach((navLink) => navLink.classList.remove("active"));
    // add active class to click link
    this.classList.add("active");
  });
});
