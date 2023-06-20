import './styles.css';
import homeImg from './images/homeImg.png';

const imgDiv = document.getElementById("homeImg");

const homeImgEle = new Image();
homeImgEle.src = homeImg;

imgDiv.appendChild(homeImgEle);
