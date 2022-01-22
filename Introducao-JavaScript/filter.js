let peoples = [
    {
        name: "Jack",
        age: 20,
        height: 1.80,
        hobbies: ["Games", "Cars", "Musics"],
        isAdult: true
    },
    {
        name: "David",
        age: 15,
        height: 1.55,
        hobbies: ["Movies", "Games"],
        isAdult: false
    },
    {
        name: "Mary",
        age: 18,
        height: 1.64,
        hobbies: ["Movies", "Sports", "Chess"],
        isAdult: true
    }
]

// Filtrando pessoas adultas.
console.log(peoples.filter((people) => {
    return people.isAdult
}))

// Filtrar pessoas com nome de 4 letras
console.log(peoples.filter((people) => {
    return people.name.length == 4
}))

// Filtrar pessoas com menos de 1.60 de altura
console.log(peoples.filter((people) => {
    return people.height < 1.60
}))

// Filtrando pessoas que tem mais de 2 hobbies.
console.log(peoples.filter((people) => {
    return people.hobbies.length > 2
}))

// Filtrando pessoas que tem 'Games' como hobbie.
console.log(peoples.filter((people) => {
    return people.hobbies.find((hobbie) => {
        return hobbie === "Games"
    })
}))
