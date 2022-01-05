"use strict";
//Overall goal: how much money should we pay for drinks etc. in a term
//So for this we need to know: cost of item, servings it provides, (and so cost/serving)
//We also need to know: how many servings we'll have in a day, and how many days in a term
class Product {
    constructor(name, price, servings) {
        this.name = "";
        this.price = 0;
        this.servings = 0;
        this.dailyServings = null;
        this.name = name;
        this.servings = servings;
        this.price = price;
    }
    pricePerServing() {
        return this.price / this.servings;
    }
    HTML(div) {
        let firstDiv = document.createElement('div');
        firstDiv.classList.add('product-column');
        div.appendChild(firstDiv);
        let productName = document.createElement('input');
        productName.value = this.name;
        firstDiv.appendChild(div.appendChild(productName));
        let productPrice = document.createElement('input');
        productPrice.value = this.price.toString();
        firstDiv.appendChild(div.appendChild(productPrice));
        let productServings = document.createElement('input');
        productServings.value = this.servings.toString();
        firstDiv.appendChild(div.appendChild(productServings));
        this.dailyServings = document.createElement("input");
        this.dailyServings.value = this.servings.toString();
        this.dailyServings.classList.add("daily-servings");
        servingsDiv.appendChild(div.appendChild(this.dailyServings));
    }
}
// the biggest Div(container)
let container = document.createElement("div");
container.classList.add("container");
document.body.appendChild(container);
let topWrapperAndBtn = document.createElement("div");
topWrapperAndBtn.classList.add("top-wrapper-button");
container.appendChild(topWrapperAndBtn);
let topWrapper = document.createElement("div");
topWrapper.classList.add("top-wrapper");
topWrapperAndBtn.appendChild(topWrapper);
let bottomWrapper = document.createElement("div");
bottomWrapper.classList.add("bottom-wrapper");
container.appendChild(bottomWrapper);
let lowerDiv = document.createElement("div");
lowerDiv.classList.add("lower-div");
lowerDiv.innerText = "How many servings do you have per day?";
bottomWrapper.appendChild(lowerDiv);
let servingsDiv = document.createElement("div");
lowerDiv.appendChild(servingsDiv);
// the Title section of product
let titleColumn = document.createElement('div');
titleColumn.classList.add('titleColumn');
topWrapper.appendChild(titleColumn);
let NameTitle = document.createElement('p');
NameTitle.innerText = 'Name';
titleColumn.appendChild(NameTitle);
let priceTitle = document.createElement('p');
priceTitle.innerText = 'Price';
titleColumn.appendChild(priceTitle);
let servingsTitle = document.createElement('p');
servingsTitle.innerText = 'Servings';
titleColumn.appendChild(servingsTitle);
// ourDiv 
let ourDiv = document.createElement("div");
ourDiv.id = "ourDiv";
ourDiv.innerText = "Products";
topWrapper.appendChild(ourDiv);
// creating the array of product
let products = [];
products.push(new Product("Coffee", 1000, 100));
products.push(new Product("Milk", 1200, 100));
products.push(new Product("Sugar", 900, 100));
products.push(new Product("Tea", 800, 100));
displayProducts();
// add Button
let addButtonDiv = document.createElement("div");
topWrapperAndBtn.appendChild(addButtonDiv);
let addButton = document.createElement("button");
addButton.innerHTML = 'Add';
topWrapper.appendChild(addButton);
addButton.addEventListener('click', addProduct);
function addProduct() {
    products.push(new Product("", 0, 1));
    displayProducts();
}
function displayProducts() {
    ourDiv.innerHTML = "";
    for (let i = 0; i < products.length; i++) {
        products[i].HTML(ourDiv);
    }
}
// calculate Cost per Term 
let termDaysDiv = document.createElement("div");
termDaysDiv.innerText = "Days in a term:";
termDaysDiv.id = "term-days-id";
lowerDiv.appendChild(termDaysDiv);
let termDays = document.createElement("input");
termDays.value = termDays.value.toString();
termDays.id = "termDays";
termDaysDiv.appendChild(termDays);
function termCost() {
    console.log(termCost);
    let totalCost = 0;
    for (let i = 0; i < products.length; i++) {
        totalCost += products[i].pricePerServing() * parseInt(products[i].dailyServings.value) * parseInt(termDays.value);
    }
    return totalCost;
}
let termCostBtn = document.createElement("button");
termCostBtn.innerHTML = 'Calculate';
document.body.appendChild(termCostBtn);
termCostBtn.addEventListener('click', calc);
function calc() {
    let finalCost = document.createElement("p");
    finalCost.innerText = `This term you need to pay ${termCost()}`;
    document.body.appendChild(finalCost);
}
//# sourceMappingURL=script.js.map