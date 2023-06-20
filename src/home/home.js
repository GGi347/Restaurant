import homeImg from './images/homeImg.png';
import './home.css';

export function generateHome(){

    const container = document.getElementById("container");
    
    const homeContent = document.createElement("div");
    homeContent.setAttribute("id", "home-content");
    container.appendChild(homeContent);
    
    const title = document.createElement("h1");
    title.innerHTML = "Taste the tradition of Nepal";
    homeContent.appendChild(title);

    const subtitle = document.createElement("p");
    subtitle.innerHTML = `Experience the best and most authentic cuisine. The tradition of Nepal on your platter. We welcome you all to 
    this authentic experience prepared by our very skilled chefs, using only the freshest ingredients.`;
    homeContent.appendChild(subtitle);

    const orderBtn = document.createElement("button");
    orderBtn.innerHTML = `Order Now`;
    homeContent.appendChild(orderBtn);

    const imgDiv = document.createElement("div");
    homeContent.appendChild(imgDiv);
    imgDiv.setAttribute("id", "homeImg");

    const homeImgEle = new Image();
    homeImgEle.src = homeImg;
    
    imgDiv.appendChild(homeImgEle);
}
