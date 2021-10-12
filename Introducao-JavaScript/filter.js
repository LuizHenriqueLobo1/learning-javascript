const peoples = [
    {id: 1, name: "Luiz Henrique", age: 20},
    {id: 2, name: "Fabiana", age: 21},
    {id: 3, name: "Nabucodonosor", age: 15}
]

let canDrink = []

//Forma tradicional
for(let i in peoples) {
    if(peoples[i].age > 18) {
        canDrink.push(peoples[i])
    }
}

console.log(canDrink)

// Utilizando método *filter*
canDrink = peoples.filter(people => people.age > 18)

console.log(canDrink)
