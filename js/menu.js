const images = [
    "../img/grilled-chicken/grilled-chicken.jpg",
    "../img/grilled-chicken/grilled-chicken2.jpg",
    "../img/grilled-chicken/grilled-chicken3.jpg"
]

const grilledchicken = [
    "../img/grilled-chicken/grilled-chicken.jpg",
    "../img/grilled-chicken/grilled-chicken2.jpg",
    "../img/grilled-chicken/grilled-chicken3.jpg"
]

const bakedsalmon = [
    "../img/baked-salmon/baked-salmon.jpg",
    "../img/baked-salmon/baked-salmon2.jpg",
    "../img/baked-salmon/baked-salmon3.jpg"
]

const beefstirfry = [
    "../img/beef-stir-fry/beef-stir-fry.jpg",
    "../img/beef-stir-fry/beef-stir-fry2.jpg",
    "../img/beef-stir-fry/beef-stir-fry3.jpg"
]

const shrimptacos = [
    "../img/shrimp-tacos/shrimp-tacos.jpg",
    "../img/shrimp-tacos/shrimp-tacos2.jpg",
    "../img/shrimp-tacos/shrimp-tacos3.jpg"
]

const chickenalfredo = [
    "../img/chicken-alfredo/chicken-alfredo.jpg",
    "../img/chicken-alfredo/chicken-alfredo2.jpg",
    "../img/chicken-alfredo/chicken-alfredo3.jpg"
]

const spaghettibolognese = [
    "../img/spaghetti-bolongnese/spaghetti-bolognese.jpg",
    "../img/spaghetti-bolongnese/spaghetti-bolognese2.jpg",
    "../img/spaghetti-bolongnese/spaghetti-bolognese3.jpg"
]

const roastbeef = [
    "../img/roast-beef/roast-beef.jpg",
    "../img/roast-beef/roast-beef2.jpg",
    "../img/roast-beef/roast-beef3.jpg"
]


const borgir = [
    "../img/borgir/borgir.jpg",
    "../img/borgir/borgir2.jpg",
    "../img/borgir/borgir3.jpg"
]

var index = 1;

const ChickenCarousel = document.getElementById("ChickenCarousel");

const SalmonCarousel = document.getElementById("SalmonCarousel");

const StirFryCarousel = document.getElementById("StirFryCarousel");

const ShrimpTacoCarousel = document.getElementById("ShrimpTacoCarousel");

const ChickAlfredoCarousel = document.getElementById("ChickAlfredoCarousel");

const SpagetBologneseCarousel = document.getElementById("SpagetBologneseCarousel");

const RoastBeefCarousel = document.getElementById("RoastBeefCarousel");

const BorgirCarousel = document.getElementById("BorgirCarousel");


setInterval(function() {
    if (index > images.length - 1) index = 0;
    ChickenCarousel.src = grilledchicken[index];
}, 5000);

setInterval(function() {
    if (index > images.length - 1) index = 0;
    SalmonCarousel.src = bakedsalmon[index];
}, 5000);

setInterval(function() {
    if (index > images.length - 1) index = 0;
    StirFryCarousel.src = beefstirfry[index];
}, 5000);

setInterval(function() {
    if (index > images.length - 1) index = 0;
    ShrimpTacoCarousel.src = shrimptacos[index];
}, 5000);

setInterval(function() {
    if (index > images.length - 1) index = 0;
    ChickAlfredoCarousel.src = chickenalfredo[index];
}, 5000);

setInterval(function() {
    if (index > images.length - 1) index = 0;
    SpagetBologneseCarousel.src = spaghettibolognese[index];
}, 5000);

setInterval(function() {
    if (index > images.length - 1) index = 0;
    RoastBeefCarousel.src = roastbeef[index];
}, 5000);

setInterval(function() {
    if (index > images.length - 1) index = 0;
    BorgirCarousel.src =  borgir[index];
}, 5000);
