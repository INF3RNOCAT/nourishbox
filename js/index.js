const images = [
    "vegetables.jpg",
    "teriyaki.jpg",
    "southwest.jpg"
]

var index = 1;

const carousel = document.getElementById("imageCarousel");

setInterval(function() {
    if (index > images.length - 1) index = 0;
    carousel.src = "./img/" + images[index];
    index++;
}, 5000);