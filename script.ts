"use strict"

// make class about all products
// make method     
// make the grid mockup
// make two buttons (1 for product and 1 for term cost)

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
    let productName = document.createElement('input')
	productName.value = this.name
    div.appendChild(productName)

    let productPrice = document.createElement('input')
	productPrice.value = this.price.toString()
    div.appendChild(productPrice)

    let productServings = document.createElement('input')
	productServings.value = this.servings.toString()
    div.appendChild(productServings)
   }
//    termCost (): number {
//     return this.pricePerServing() * this.servingsPerDay * this.termDays
//     }
}

let ourDiv = document.createElement("div")
 ourDiv.innerText = "Products"
document.body.appendChild(ourDiv)


let servingsPerDay: number = 2
let termDays: number = 100


let products: Product[] = []

products.push(new Product("Coffee", 1000, 100))
products.push(new Product("Milk", 1200, 100))
products.push(new Product("Sugar", 900, 100))
products.push(new Product("Tea", 800, 100))

displayProducts()


let addButton = document.createElement("button")
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

