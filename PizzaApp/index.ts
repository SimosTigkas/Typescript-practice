type Pizza = {
    id: number,
    name: string,
    price: number
}

type Order = {
    id: number,
    pizza: Pizza,
    status: "ordered" | "completed"
}

let nextOrderId:number= 1
let nextPizzaId:number = 1

const menu: Pizza[] = [
    { id: nextPizzaId++, name: "Margherita", price: 8 },
    { id: nextPizzaId++, name: "Pepperoni", price: 10 },
    { id: nextPizzaId++, name: "Hawaiian", price: 10 },
    { id: nextPizzaId++, name: "Veggie", price: 9 },
]

let cashInRegister:number= 100
const orderHistory:Order[] = []

function addNewPizza(pizzaObj: Omit<Pizza, "id">): Pizza {
    const newPizza: Pizza = { id: nextPizzaId++, ...pizzaObj }
    menu.push(newPizza)
    console.log(`New pizza added: ${newPizza.name} with id ${newPizza.id}`)
    return newPizza
}

function placeOrder(pizzaName: string): Order | undefined {
    const selectedPizza = menu.find(p => p.name === pizzaName)
    if (selectedPizza) {
        cashInRegister += selectedPizza.price
        const newOrder:Order = { pizza: selectedPizza, status: "ordered", id: nextOrderId++}
        orderHistory.push(newOrder)
        return newOrder
    }
    else {
        console.error(`Sorry, we don't have ${pizzaName} on the menu.`)
        return
    }
}


function completeOrder(orderId: number): Order | undefined {
    const orderObj = orderHistory.find(orderObj => orderObj.id === orderId)
    if (orderObj) {
        orderObj.status = "completed"
        return orderObj
    } else {
        console.error(`No order found for ${orderId}.`)
        return
    }
}

export function getPizzaDetail(identifier: string | number): Pizza | undefined {
    if (typeof identifier === "number") {
        return menu.find(pizza => pizza.id === identifier)
    }
    else if (typeof identifier === "string") {
        return menu.find(pizza => pizza.name.toLowerCase() === identifier.toLowerCase())
    }
    else {
        throw new TypeError("Parameter `identifier` must be either a string or a number")
    }
}

addNewPizza({name: "Chicken Bacon Ranch", price: 12 })
addNewPizza({name: "BBQ Chicken", price: 12 })
addNewPizza({name: "Spicy Sausage", price: 11 })
placeOrder("Chicken Bacon Ranch")
completeOrder(1)
console.log("Menu:", menu)
console.log("Cash in register:", cashInRegister)
console.log("Order queue:", orderHistory)


// type Address = {
//     street: string
//     city: string
//     country: string
// }

// type Person = {
//     name: string,
//     age: number,
//     isStudent: boolean,
//     address?: Address
// }

// const address1: Address = { street: "Ellinos Stratiotou 93B", city: "Patras", country: "Greece" }
// const address2: Address = { street: "asdasda", city: "asdasdasda", country: "asdasd" }

// const person1: Person= {
//     name: "Joe",
//     age: 42,
//     isStudent: true,
//     address: address1
// }

// const person2 : Person= {
//     name: "Jill",
//     age: 66,
//     isStudent: false
// }

// const ages: number[] = [100, 101]
// const people: Person[] = [person1, person2]
// const people2: Array<Person> = [person1, person2]


// const myName = "Simos"
type User = {
    id: number
    username: string
    role: "member" | "contributor" | "admin"
}

let nextUserId = 1

const users: User[] = [
    { id: nextUserId++, username: "john_doe", role: "member" },
    { id: nextUserId++, username: "jane_smith", role: "contributor" }
];

// function fetchUserDetails(username: string): User {
//     const user = users.find(user => user.username === username)
//     if (!user) {
//         throw new Error(`User with username ${username} not found`)
//     }
//     return user
// }

type UpdatedUser = Partial<User>

function updateUser(id: number, updates:UpdatedUser) {
    const foundUser= users.find(user => user.id === id);
    if (!foundUser) {
        console.error(`User with id ${id} not found`);
        return;
    }
    Object.assign(foundUser, updates);
    console.log(`User with id ${id} updated successfully:`, foundUser);
}

// Example updates:
updateUser(1, { username: "new_john_doe" });
updateUser(4, { role: "contributor" });

function addNewUser(newUser: Omit<User, "id">): User {
    const user: User = { id: nextUserId++, ...newUser };
    users.push(user);
    console.log(`User added successfully:`, user);
    return user;
}

// example usage:
addNewUser({ username: "joe_schmoe", role: "member" })

const gameScores = [14, 21, 33, 42, 59]
const favoriteThings = ["raindrops on roses", "whiskers on kittens", "bright copper kettles", "warm woolen mittens"];
const voters = [{ name: "Alice", age: 42 }, { name: "Bob", age: 77 }]

function getLastItem<PlaceholderType>(array: PlaceholderType[]): PlaceholderType | undefined {
    return array[array.length - 1]
}

console.log(getLastItem(gameScores));
console.log(getLastItem(favoriteThings));
console.log(getLastItem(voters));

function addToArray<Type>(array: Type[], item:Type) {
    array.push(item)
    return array
}

// example usage:
addToArray(menu, {id: nextPizzaId++, name: "Chicken Bacon Ranch", price: 12 })
addToArray<Order>(orderHistory, { id: nextOrderId++, pizza: menu[2], status: "completed" })