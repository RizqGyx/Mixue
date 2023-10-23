// Home About Slideshow JS
let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 4000); // Change image seconds Handling
}

const menuToggle = document.querySelector(".menu-toogle");
const closeMenuLinks = document.querySelectorAll(".close-menu");

menuToggle.addEventListener("click", function() {
    document.body.classList.toggle("menu-open");
});

window.addEventListener("resize", function() {
    if (window.innerWidth > 800) {
        document.body.classList.remove("menu-open");
    }
});

closeMenuLinks.forEach(function(link) {
    link.addEventListener("click", function() {
        document.body.classList.remove("menu-open");
    });
});