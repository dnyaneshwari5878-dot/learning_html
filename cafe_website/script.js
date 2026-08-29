/* =========================================
   AURELIA CAFE
   JAVASCRIPT
========================================= */


/* ---------- HEADER SCROLL EFFECT ---------- */

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

});


/* ---------- MOBILE MENU ---------- */

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("mobile-active");

});


/* ---------- CLOSE MOBILE MENU ---------- */

const links = document.querySelectorAll(".nav-links a");

links.forEach(link => {

    link.addEventListener("click", () => {
        navLinks.classList.remove("mobile-active");
    });

});


/* ---------- SCROLL REVEAL ---------- */

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("active");

                revealObserver.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.15
    }
);


revealElements.forEach(element => {
    revealObserver.observe(element);
});


/* ---------- RESERVATION FORM ---------- */

const reservationForm = document.getElementById("reservationForm");
const formMessage = document.getElementById("formMessage");

reservationForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const date = document.getElementById("date").value;
    const guests = document.getElementById("guests").value;
    const time = document.getElementById("time").value;


    if (!name || !date || !guests || !time) {

        formMessage.textContent =
            "Please fill in all the details.";

        return;
    }


    formMessage.textContent =
        `Thank you, ${name}! Your table request for ${guests} at ${time} has been received.`;

    reservationForm.reset();

});


/* ---------- SET MINIMUM DATE ---------- */

const dateInput = document.getElementById("date");

const today = new Date();

const year = today.getFullYear();

const month = String(today.getMonth() + 1).padStart(2, "0");

const day = String(today.getDate()).padStart(2, "0");

dateInput.min = `${year}-${month}-${day}`;


/* ---------- SIMPLE PARALLAX EFFECT ---------- */

const hero = document.querySelector(".hero");

window.addEventListener("scroll", () => {

    const scrollPosition = window.scrollY;

    if (scrollPosition < window.innerHeight) {

        hero.style.backgroundPositionY =
            `${scrollPosition * 0.35}px`;

    }

});