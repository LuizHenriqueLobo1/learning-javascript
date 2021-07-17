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

console.log(`Printando valores do vetor com for tradicional: `)
for(var i = 0; i < tamanho; i++) {
	console.log(`${vetor[i]}`)
}

console.log(`Printando valores do vetor com for usando in: `)
for(let i in vetor) {
	console.log(`${vetor[i]}`)
}