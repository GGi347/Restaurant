
import { generateHome } from "./home";
import { generateMenu } from "./menu/menu";
const homeBtn = document.getElementById("homeBtn");
homeBtn.addEventListener('click', generateHome);

const menuBtn = document.getElementById("menuBtn");
menuBtn.addEventListener('click', generateMenu);