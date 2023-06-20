import "./menu.css";
import thaliImg from "../images/thali.jpg";
import momoImg from "../images/momo.jpg";

function Item(typeNo, name, ingredients, price){
    return{typeNo, name, ingredients, price};
}

function getItems(){
    let items = [];
    items[0] = Item(1, "Veg Thali", "rice, daal, saag, potato", "100 Rs");
    items[1] = Item(1, "Chicken Thali", "rice, daal, saag, potato, chicken", "190 Rs");
    items[2] = Item(1, "Pork Thali", "rice, daal, saag, potato, pork", "190 Rs");

    items[3] = Item(2, "Veg Momo","cabbage, onion, paneer, carrot", "190 Rs");
    items[4] = Item(2, "Fried Veg Momo","cabbage, onion, paneer, carrot", "290 Rs");
    items[5] = Item(2, "Chicken Momo","cabbage, onion, paneer, carrot, chicken", "190 Rs");
    items[6] = Item(2, "Chicken Fried Momo","cabbage, onion, paneer, carrot, chicken", "290 Rs");
    return items;
}


export function generateMenu() {

    const menuContainer = document.createElement("div");
    menuContainer.setAttribute("id", "menu-container");
    document.body.appendChild(menuContainer);

    const itemOneImgDiv = document.createElement("div");
    itemOneImgDiv.setAttribute("id", "item-one-img-div");
    menuContainer.appendChild(itemOneImgDiv);

    const thaliImgEle = new Image();
    thaliImgEle.src = thaliImg;
    itemOneImgDiv.appendChild(thaliImgEle);

    const itemOneList = document.createElement("ul");
    itemOneList.setAttribute("id", "item-one-list");
    menuContainer.appendChild(itemOneList);

    const itemTwoList = document.createElement("ul");
    itemTwoList.setAttribute("id", "item-two-list");
    menuContainer.appendChild(itemTwoList);

    const items = getItems();
    for(let item of items){

        const itemEle = document.createElement("li");
        itemEle.classList = "item-one";
        if(item.typeNo == 1){
            itemOneList.appendChild(itemEle);
        }
        else{
            itemTwoList.appendChild(itemEle);
        }

        const itemName = document.createElement("h2");
        itemName.classList = "item-name";
        itemName.innerHTML = item.name;
        itemEle.appendChild(itemName);

        const itemIngredients = document.createElement("p");
        itemIngredients.classList = "item-ingredients";
        itemIngredients.innerHTML = item.ingredients;
        itemEle.appendChild(itemIngredients);

        const itemPrice = document.createElement("p");
        itemPrice.classList = "item-price";
        itemPrice.innerHTML = item.price;
        itemEle.appendChild(itemPrice);

        const lineDivider = document.createElement("hr");
        itemEle.appendChild(lineDivider);
    }
    const itemTwoImgDiv = document.createElement("div");
    itemTwoImgDiv.setAttribute("id", "item-two-img-div");
    menuContainer.appendChild(itemTwoImgDiv);

    const momoImgEle = new Image();
    momoImgEle.src = momoImg;
    itemTwoImgDiv.appendChild(momoImgEle);

}


