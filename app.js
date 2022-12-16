// starting slide index
let slideIndex = 1;

// n parameter => (slide n1, n2, or n3)
function plusSlide(n) {
    showSlide(slideIndex += n)
}

function currentSlide(n) {
    showSlide(slideIndex = n)
}

// main function to change actual slide
function showSlide(n) {
    let i;
    let slides = document.getElementsByClassName("surveyBanner")

    // if (n)slide is higher than the number of slide (array) then
    // slideIndex == 1
    if (n > slides.length) {
        slideIndex = 1
    }

    // if (n)slide is smaller than the number of slide (array) then
    // slideIndex == actual number of slides (1, 2 or 3)
    if (n < 1) {
        slideIndex = slides.length;
    }

    for (i = 0;i < slides.length;i++) {
        slides[i].style.display = "none";
        // console.log(slides[i]);
    }
    slides[slideIndex - 1].style.display = "flex";
}

// nav menu burger function
const burger = document.getElementById('burger')
const navLinks = document.querySelector('.navLinks')
const logo = document.querySelector('.logo')
let close = document.querySelector('.custom-fa-bars-open')

burger.addEventListener('click', () => {
    navLinks.classList.toggle('flex')
    logo.classList.toggle('hidden')
    close.classList.toggle('centeredPosition')
})