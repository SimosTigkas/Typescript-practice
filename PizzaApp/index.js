const menu = [
    { name: "Margherita", price: 8 },
    { name: "Pepperoni", price: 10 },
    { name: "Hawaiian", price: 10 },
    { name: "Veggie", price: 9 },
]

const cashInRegister = 100
const orderQueue = []

function addNewPizza(pizzaObj) {
    menu.push(pizzaObj)
}

function placeOrder(pizzaName) {
    const selectedPizza = menu.find(p => p.name === pizzaName)
    if (selectedPizza) {
        cashInRegister += selectedPizza.price
        const newOrder = { pizza: selectedPizza, status: "ordered" }
        orderQueue.push(newOrder)
        return newOrder
    }
    else {
        console.log(`Sorry, we don't have ${pizzaName} on the menu.`)
    }
}