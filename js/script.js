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

// Menu Responsive
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

const links = document.querySelectorAll('.side-bar-list ul li a');

// Menambahkan event listener untuk setiap tautan
links.forEach(link => {
    link.addEventListener('click', (e) => {
    // Menghapus kelas "clicked" dari semua tautan
    links.forEach(l => l.classList.remove('clicked'));
    // Menambahkan kelas "clicked" ke tautan yang diklik
    link.classList.add('clicked');
    });
});

const scrollToTopButton = document.getElementById("scrollToTop");

// Tampilkan tombol saat halaman di-scroll ke bawah
window.addEventListener("scroll", function() {
    if (window.scrollY > 200) { // Anda dapat mengatur jumlah piksel yang diperlukan untuk menampilkan tombol
        scrollToTopButton.style.display = "block";
    } else {
        scrollToTopButton.style.display = "none";
    }
});

document.addEventListener("DOMContentLoaded", function() {
    var sideBarList = document.querySelector(".side-bar-list");
    var links = sideBarList.querySelectorAll("ul li a");

    window.addEventListener("scroll", function() {
        links.forEach(function(link) {
            link.classList.remove("clicked");
        });
    });
});