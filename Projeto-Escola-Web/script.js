window.onload = function() {
	var btnExibirFormulario = document.getElementById("bCadastrarAluno");
	var formularioExibido = document.getElementById("formCadastroAluno");
	function abrirForm() {
		formularioExibido.style.display = "table";
	}
	
	btnExibirFormulario.addEventListener("click", abrirForm, false);
}

var qtdPessoas = 0

function cadastrar(qtdPessoas) {

	let nomes  = []
	let sexos  = []
	let idades = []

	nomes[qtdPessoas]  = document.querySelector('input#txtNome').value
	sexos[qtdPessoas]  = document.querySelector('select#sSexo').value
	idades[qtdPessoas] = document.querySelector('input#numIdade').value

	this.qtdPessoas++;

	window.alert('Aluno cadastrado com sucesso!')
	console.log(nomes[qtdPessoas], sexos[qtdPessoas], idades[qtdPessoas])
	console.log(this.qtdPessoas)
}

function cadastrarAluno() {
	console.log('Função CADASTRAR chamada com sucesso!')
}

function listarAlunos(pessoa) {
	console.log('Função LISTAR chamada com sucesso!')
}

function alterarAluno() {
	console.log('Função ALTERAR chamada com sucesso!')
}

function removerAluno() {
	console.log('Função REMOVER chamada com sucesso!')
}