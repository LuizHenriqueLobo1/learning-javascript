var nomes  = []
var sexos  = []
var idades = []
var qtdPessoas = 0

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

function cadastrar(qtdPessoas) {

	nomes[this.qtdPessoas]  = document.querySelector('input#txtNome').value
	sexos[this.qtdPessoas]  = document.querySelector('select#sSexo').value
	idades[this.qtdPessoas] = document.querySelector('input#numIdade').value

	this.qtdPessoas++;

	window.alert(`Aluno ${this.qtdPessoas} cadastrado com sucesso.`)
}

function listar(qtdPessoas) {

	let list = document.getElementById("listaAlunos")

	list.textContent = ''
	
	if(this.qtdPessoas < 1)
		list.textContent = 'Nenhum aluno cadastrado.'

	for(let i = 0; i < this.qtdPessoas; i++) {
		const aluno = document.createElement('p')
		aluno.id = `id${i+1}`
		aluno.textContent = `Aluno ${i+1}: ${nomes[i]} / ${sexos[i]} / ${idades[i]}`
		list.appendChild(aluno)
	}
}

function remover(qtdPessoas) {

	let idAluno = document.getElementById("idAluno").value
	
	nomes.splice(idAluno-1, 1)
	sexos.splice(idAluno-1, 1)
	idades.splice(idAluno-1, 1)
	
	this.qtdPessoas--;

	window.alert(`Aluno ${idAluno} removido com sucesso.`)
}