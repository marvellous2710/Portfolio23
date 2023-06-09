//TOGGLE ICON NAVBAR

let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

// SCROLL SECTION
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });

  //sticky navbar
  let header = document.querySelector("header");

  header.classList.toggle("sticky", window.scrollY > 100);

  //remove toggle icon and navbar when click navbar link scroll
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

//Scroll reveal
ScrollReveal({
  //reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
ScrollReveal().reveal(
  ".home-img, .services-container, .portfolio-box, .contact-form",
  { origin: "bottom" }
);
ScrollReveal().reveal(".home-content h1, .about-img", { origin: "left" });
ScrollReveal().reveal(".home-content p, .about-content", { origin: "right" });

//TYPED JS
const typed = new Typed(".multiple-text", {
  strings: ["Frontend Developer", "Marketing Digital", "Video Editor"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});



//CONTACT ME --------------------------------------------------------//

let contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (e) {
  let myInput      = document.getElementById("fullName");
  let emailAddress = document.getElementById("emailAddress");
  let mobNumber    = document.getElementById("mobNumber");
  let subject      = document.getElementById("subject");
  let message      = document.getElementById("messageText");

  
  let myRegex = /^[a-zA-Z-\s]+$/;


    if (myInput.value.trim() && emailAddress.value.trim() && mobNumber.value.trim() && subject.value.trim() && message.value.trim() == "") {
    let myError = document.getElementById("error");
    myError.innerHTML = "Tous les champs sont requis.";
    myError.style.color = "red";
    e.preventDefault();
  } else if (myRegex.test(myInput.value) == false) {
    let myError = document.getElementById("error");
    myError.innerHTML = "Le nom doit comporter des lettres et des tirets uniquements.";
    myError.style.color = "red";
    e.preventDefault();
  }
});