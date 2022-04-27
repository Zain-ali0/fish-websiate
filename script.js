const Menu = document.querySelector(".menuToggle");
const Nav = document.querySelector("nav");
const Header = document.querySelector("header");
const Img = document.getElementById('img');
let Images = [
    "/img/fish2.jpg",
    "/img/fish3.jpg",
    "/img/fish4.jpg",
    "/img/fish5.jpg",
    "/img/fish6.jpg",
    "/img/fish7.jpg",
    "/img/fish8.jpg",
    "/img/fish9.jpg",
    "/img/fish10.jpg",
    "/img/fish1.jpg",
];
let x = 0;

Menu.addEventListener("click" , () => {
    Menu.classList.toggle("active");
    Nav.classList.toggle("active");
});

window.addEventListener("scroll" , () => {
    Header.classList.toggle("active", window.scrollY> 0);
});

//auto slider
function AutoSlider ()  {
    if(x > Images.length - 1) {
        x = 0;
    }
    Img.src = Images[x];
    x++;
}
setInterval(AutoSlider,3000);