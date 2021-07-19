window.onload = function() {
	var btnExibirFormulario = document.getElementById("bCadastrarAluno");
	var formularioExibido = document.getElementById("formCadastroAluno");
	function abrirForm() {
		formularioExibido.style.display = "table";
	}
	
	btnExibirFormulario.addEventListener("click", abrirForm, false);
}

var nomes  = []
var sexos  = []
var idades = []
var qtdPessoas = 0

function cadastrar(qtdPessoas) {

	nomes[this.qtdPessoas]  = document.querySelector('input#txtNome').value
	sexos[this.qtdPessoas]  = document.querySelector('select#sSexo').value
	idades[this.qtdPessoas] = document.querySelector('input#numIdade').value

	this.qtdPessoas++;

	window.alert('Aluno cadastrado com sucesso!')
	console.log(`Aluno ${this.qtdPessoas} cadastrado.`)
}

function cadastrarAluno() {
	console.log('Função CADASTRAR chamada com sucesso!')
}

function listarAlunos(qtdPessoas) {
	console.log('Função LISTAR chamada com sucesso!')

	for(let i = 0; i < this.qtdPessoas; i++)
		console.log(`Aluno: ${i+1} Nome: ${nomes[i]} Sexo: ${sexos[i]} Idade: ${idades[i]}`)
}

function alterarAluno() {
	console.log('Função ALTERAR chamada com sucesso!')
}

function removerAluno() {
	console.log('Função REMOVER chamada com sucesso!')
}