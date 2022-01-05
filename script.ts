"use strict"

//Overall goal: how much money should we pay for drinks etc. in a term
//So for this we need to know: cost of item, servings it provides, (and so cost/serving)
//We also need to know: how many servings we'll have in a day, and how many days in a term


class Product {
    name:string = ""
    price:number = 0
    servings:number = 0

    constructor (name:string, price:number, servings:number){
        this.name = name
        this.servings = servings
        this.price = price
	    
    }

	pricePerServing ():number {
    return this.price/this.servings
   }

   HTML (div:HTMLElement) {
    // let section = document.createElement('section')
    // div.appendChild(section)

    let productColumn = document.createElement('div')
    productColumn.classList.add('product-column')
    div.appendChild(productColumn)

    let productName = document.createElement('input')
	productName.value = this.name
    productColumn.appendChild(div.appendChild(productName)) 

    let productPrice = document.createElement('input')
	productPrice.value = this.price.toString()
    productColumn.appendChild(div.appendChild(productPrice)) 

    let productServings = document.createElement('input')
	productServings.value = this.servings.toString()
    productColumn.appendChild(div.appendChild(productServings))
    
    let dailyServings = document.createElement("input")
    dailyServings.value = this.servings.toString()
    lowerDiv.appendChild(div.appendChild(dailyServings))
    
   }
}

let ourDiv = document.createElement("div")
ourDiv.id = "ourDiv"
ourDiv.innerText = "Products"
document.body.appendChild(ourDiv)

let lowerDiv = document.createElement("div")
lowerDiv.id = "lowerDiv"
lowerDiv.innerText = "Consumption"
document.body.appendChild(lowerDiv)

// the Title section of product


let titleColumn = document.createElement('div')
titleColumn.classList.add('titleColuumn')
document.body.appendChild(titleColumn)

let NameTitle =  document.createElement('p')
NameTitle.innerText = 'Name'
titleColumn.appendChild(NameTitle)

let priceTitle =  document.createElement('p')
priceTitle.innerText = 'Price'
titleColumn.appendChild(priceTitle)

let servingsTitle =  document.createElement('p')
servingsTitle.innerText = 'Servings'
titleColumn.appendChild(servingsTitle)

// creating the array of product
let products: Product[] = []

products.push(new Product("Coffee", 1000, 100))
products.push(new Product("Milk", 1200, 100))
// products.push(new Product("Sugar", 900, 100))
// products.push(new Product("Tea", 800, 100))

displayProducts()

// add Button 
let addButton = document.createElement("button")
addButton.innerHTML= 'Add'
document.body.appendChild(addButton)

addButton.addEventListener('click', addProduct)

function addProduct() {
    products.push(new Product("", 0, 1))
    displayProducts ()
}

function displayProducts () {
    ourDiv.innerHTML = ""
    for (let i=0; i<products.length; i++) {
        products[i].HTML(ourDiv)
    }
}


// calculate Cost of term 
let dailyServings: number = 2
let termDays: number = 100


// let termDays: number = 100

function termCost (): number {
    return products[0].pricePerServing() * dailyServings * termDays
    }

let termCostBtn = document.createElement("button")
termCostBtn.innerHTML = 'Calculate'
document.body.appendChild(termCostBtn)

termCostBtn.addEventListener('click', termCost)

let finalCost = document.createElement("p")
finalCost.innerText = `This term you need to pay ${termCost()}`
document.body.appendChild(finalCost)

