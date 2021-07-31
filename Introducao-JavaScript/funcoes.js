// declarando função sem parâmetros e retorno
function printaHello() {
    console.log('Hello, world')
}

printaHello()

// declarando função com parâmetros e retorno
function soma(a, b) {
    return a + b
}

console.log(soma(3, 2))

// declarando função sem parâmetros e com retorno
function atribui() {
    return 10
}

let a = atribui()
console.log(a)

// declarando array de strings
let pessoas = [
    'Nabucodonosor',
    'Gertrudes',
    'Vicente'
]

// usando arrow function para descobrir,
// o tamanho de cada string do array
console.log(pessoas.map(pessoas => pessoas.length))

// declarando array de números e strings
let array = [
    '4',
    6.5,
    5,
    '2.2',
    3
]

// usando arrow function para montar array
// e dizer quais elementos são números
console.log(array.map(array => typeof(array) == 'number'))