import './asset/style.css';
import createHeader from "./asset/pages/header";
import createNavbar from './asset/pages/navbar';
import createMain from './asset/pages/main-page';
import createMenu from './asset/pages/menu-page';
import createAbout from './asset/pages/about-page';

// Setting the wrapper div
const body = document.querySelector("body");
const content = document.createElement("div");
content.id = "content";
body.appendChild(content);
const main = document.createElement("div");
main.id = 'main';
content.appendChild(main);

// Creating the header and the navbar
createHeader();
createNavbar();
createMain();

// event listeners for the navbar

home.addEventListener("click", () => {
    document.getElementById("main").innerHTML = '';
    createMain();
});

menu.addEventListener("click", () => {
    document.getElementById("main").innerHTML = '';
    createMenu();
});

about.addEventListener("click", () => {
    document.getElementById("main").innerHTML = '';
    createAbout();
});

