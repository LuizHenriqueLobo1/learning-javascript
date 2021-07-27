// declarando uma classe
class pessoa {
	constructor(id, nome, idade, sexo) {
		this.id = 0
		this.nome = 'indefinido'
		this.idade = 0
		this.sexo = 'indefinido'
	}
}

// declarando um objeto da classe pessoa
pessoa1 = new pessoa()

// settando valores dos atributos
pessoa1.id = 1
pessoa1.nome = 'Luiz Henrique'
pessoa1.idade = 20
pessoa1.sexo = 'Masculino'

console.log('Pessoa 1:')
console.log(pessoa1)

// declarando array
let arrayPessoas = []

// adicionando objeto pessoa1 no array
arrayPessoas.push(pessoa1)

console.log('Array de Pessoas:')
console.log(arrayPessoas)