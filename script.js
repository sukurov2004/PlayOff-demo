
// *=============LOADING EKRANI===============
window.onload = function () {
    setTimeout(() => {
        document.getElementById("loading").style.display = "none";
        document.getElementById("content").style.display = "block";   
    }, 500);
};


//* Saytın səhifəsi yüklənərkən avtomatik yenilənməsini dayandırmaq üçün
window.addEventListener("beforeunload", function (e) {
    // Event blok etmek sehve yenilenmemesi ucun
    e.preventDefault();
    e.returnValue = '';
  });


// *====================burger menu====================
function toggleMenu() {
    const navLinks = document.querySelector("nav");
    const menuIcon = document.querySelector(".menu-icon i");

    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {
        menuIcon.classList.remove("fa-bars");
        menuIcon.classList.add("fa-times");  // 
    } else {
        menuIcon.classList.remove("fa-times");
        menuIcon.classList.add("fa-bars");  // 
    }
}
// Menu bağlantılarına klik olundugu halda menyu baglamaq
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function() {
        document.querySelector("nav").classList.remove("active"); // Menyu baglamaq
        document.querySelector(".menu-icon i").classList.remove("fa-times");
        document.querySelector(".menu-icon i").classList.add("fa-bars");
    });
});


// *====================Slide Show 2 saniyeden bir cevrilmesi====================
var myCarousel = document.querySelector('#carouselExampleControls');
var carousel = new bootstrap.Carousel(myCarousel, {
  interval: 2000, 
  ride: 'carousel'
});
