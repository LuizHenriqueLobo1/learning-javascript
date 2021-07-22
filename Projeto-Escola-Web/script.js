class aluno {
	constructor(nome, sexo, idade) {
		this.nome = 'indefinido';
		this.sexo = 'indefinido';
		this.idade = 0;
	}
}

var arrayAlunos = []
var qtdAlunos = 0

function exibeDivs(id) {
	if(document.getElementById(id).style.display == "block") {
	  document.getElementById(id).style.display = "none";
	  return;
	}
	Array.from(document.getElementsByClassName("hide")).forEach(
	  div => (div.style.display = "none")
	);
	document.getElementById(id).style.display = "block";
	if(id == "listar")
		listar()
}

function cadastrar(qtdAlunos) {

	let novoAluno = new aluno()

	novoAluno.nome  = document.querySelector('input#txtNome').value
	novoAluno.sexo  = document.querySelector('select#sSexo').value
	novoAluno.idade = document.querySelector('input#numIdade').value

	arrayAlunos.push(novoAluno)

	this.qtdAlunos++;

	window.alert(`Aluno ${this.qtdAlunos} cadastrado com sucesso.`)
}

function listar(qtdAlunos) {

	let list = document.getElementById("listaAlunos")

	list.textContent = ''
	
	if(this.qtdAlunos < 1)
		list.textContent = 'Nenhum aluno cadastrado.'

	for(let i = 0; i < this.qtdAlunos; i++) {
		let aluno = document.createElement('div')
		let nome  = document.createElement('p')
		let sexo  = document.createElement('p')
		let idade = document.createElement('p')

		aluno.setAttribute('id', `id${i+1}`)
		aluno.setAttribute('class', 'divAluno')

		aluno.textContent = `Aluno ${i+1}`
		nome.textContent = `Nome: ${arrayAlunos[i].nome}`
		sexo.textContent = `Sexo: ${arrayAlunos[i].sexo}`
		idade.textContent = `Idade: ${arrayAlunos[i].idade}`
		
		aluno.appendChild(nome)
		aluno.appendChild(sexo)
		aluno.appendChild(idade)
		list.appendChild(aluno)
	}
}

function alterar() {
	window.alert('Ainda sendo implementado...')
}

function remover(qtdAlunos) {

	if(this.qtdAlunos > 0) {
		let idAluno = document.getElementById("idAluno").value

		arrayAlunos.splice(idAluno-1, 1)
		
		this.qtdAlunos--;
		
		window.alert(`Aluno ${idAluno} removido com sucesso.`)
	} else
		window.alert('Nenhum aluno na lista.')
}