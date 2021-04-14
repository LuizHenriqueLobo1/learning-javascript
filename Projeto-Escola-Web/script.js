window.onload = function() {
	var btnExibirFormulario = document.getElementById("bCadastrarAluno");
	var formularioExibido = document.getElementById("formCadastroAluno");
	function abrirForm() {
		formularioExibido.style.display = "table";
	}
	
	btnExibirFormulario.addEventListener("click", abrirForm, false);
}

function cadastrar() {

	let pessoa = {
		nome: 'Indefinido',
		sexo: 'Indefinido',
		idade: 0
	};

	pessoa.nome = document.querySelector('input#txtNome').value
	pessoa.sexo = document.querySelector('select#sSexo').value
	pessoa.idade = document.querySelector('input#numIdade').value

	window.alert('Aluno cadastrado com sucesso!')

	listarAlunos(pessoa)
}

function cadastrarAluno() {
	console.log('Função CADASTRAR chamada com sucesso!')
}

function listarAlunos(pessoa) {
	console.log('Função LISTAR chamada com sucesso!')

	pNome = document.querySelector('p#pNome')
	pSexo = document.querySelector('p#pSex')
	pIdade = document.querySelector('p#pIdade')

	pNome.innerHTML += ` ${pessoa.nome}`
	pSexo.innerHTML += ` ${pessoa.sexo}`
	pIdade.innerHTML += ` ${pessoa.idade}`
}

function alterarAluno() {
	console.log('Função ALTERAR chamada com sucesso!')
}

function removerAluno() {
	console.log('Função REMOVER chamada com sucesso!')
}