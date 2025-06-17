const menu = [
    { name: "Margherita", price: 8 },
    { name: "Pepperoni", price: 10 },
    { name: "Hawaiian", price: 10 },
    { name: "Veggie", price: 9 },
]

let cashInRegister:number= 100
let nextOrderId:number= 1
let orderQueue:any = []

function addNewPizza(pizzaObj: any) {
    menu.push(pizzaObj)
}

function placeOrder(pizzaName: any) {
    const selectedPizza = menu.find(p => p.name === pizzaName)
    if (selectedPizza) {
        cashInRegister += selectedPizza.price
        let newOrder = { pizza: selectedPizza, status: "ordered", id: nextOrderId++}
        orderQueue.push(newOrder)
        return newOrder
    }
    else {
        console.error(`Sorry, we don't have ${pizzaName} on the menu.`)
        return
    }
}


function completeOrder(orderId: number) {
    let orderObj = orderQueue.find(orderObj => orderObj.id === orderId)
    if (orderObj) {
        orderObj.status = "completed"
        return orderObj
    } else {
        console.error(`No order found for ${orderId}.`)
        return
    }
}

addNewPizza({ name: "Chicken Bacon Ranch", price: 12 })
addNewPizza({ name: "BBQ Chicken", price: 12 })
addNewPizza({ name: "Spicy Sausage", price: 11 })
placeOrder("Chicken Bacon Ranch")
completeOrder(1)
console.log("Menu:", menu)
console.log("Cash in register:", cashInRegister)
console.log("Order queue:", orderQueue)



type Person = {
    name: string,
    age: number,
    isStudent: boolean    
}

let person1: Person= {
    name: "Joe",
    age: 42,
    isStudent: true
}

let person2 : Person= {
    name: "Jill",
    age: 66,
    isStudent: false
}