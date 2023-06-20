
import { generateHome } from "./home/home";
import { generateMenu } from "./menu/menu";
import { generateContact } from "./contact/contact";

function clearContent(){
    const container = document.getElementById("container");
    container.innerHTML = '';
}

const homeBtn = document.getElementById("homeBtn");
homeBtn.addEventListener('click', () => {
    clearContent();
    generateHome();
});

const menuBtn = document.getElementById("menuBtn");
menuBtn.addEventListener('click', () => {
    clearContent();
    generateMenu();
});

const contactBtn = document.getElementById("contactBtn");
contactBtn.addEventListener('click', () => {
    clearContent();
    generateContact();
});

generateHome();
