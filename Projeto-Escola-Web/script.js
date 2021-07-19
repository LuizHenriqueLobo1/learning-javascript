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
	console.log(`Aluno ${this.qtdPessoas} cadastrado com sucesso.`)
}

function listar(qtdPessoas) {
	let list = document.getElementById("listaAlunos")
	list.innerHTML = ''
	if(this.qtdPessoas < 1)
		list.innerHTML = 'Nenhum aluno cadastrado.'
	for(let i = 0; i < this.qtdPessoas; i++) {
		list.innerHTML += `Aluno ${i+1}: ${nomes[i]} / ${sexos[i]} / ${idades[i]}<br>`
	}
}