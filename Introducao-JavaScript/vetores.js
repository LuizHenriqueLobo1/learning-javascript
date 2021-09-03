let vetor = [5, 9, 2, 3] // declarando vetor

console.log(`Vetor original: ${vetor}`)

vetor.push(4) // adicionando novo valor ao vetor

console.log(`Vetor com novo valor adicionado: ${vetor}`)

vetor.sort() // ordenando vetor

console.log(`Vetor ordenado: ${vetor}`)

let posicao = vetor.indexOf(9) // procurar valor no vetor

console.log(`Posicao do valor 9 no vetor: ${posicao}`)

let tamanho = vetor.length // atribuindo tamanho do vetor a uma variável

console.log(`Tamanho do vetor: ${tamanho}`)

// percorrendo vetor de forma tradicional
console.log(`Printando valores do vetor com for tradicional: `)
for(var i = 0; i < tamanho; i++) {
	console.log(`${vetor[i]}`)
}

// percorrendo vetor usando for in
console.log(`Printando valores do vetor com for usando in: `)
for(let i in vetor) {
	console.log(`${vetor[i]}`)
}

// percorrendo vetor usando forEach
vetor.forEach((item, posicao) => {
	console.log(`${item}[${posicao}]`)
})

// criando vetor secundario com os tipos dos elementos do vetor primario
// usando map
let vetorTipos = vetor.map(item => {
	return typeof(item)
})

console.log(vetorTipos)