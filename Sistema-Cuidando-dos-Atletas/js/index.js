class atleta {
	constructor(nome, idade, sexo, febre, temp_max, sintomas,  kit, medalhas, quantas, quais) {
		this.nome = ''
		this.idade = 0
		this.sexo = ''
		this.febre = ''
		this.temp_max = 0
		this.sintomas = ''
		this.kit = ''
		this.medalhas = ''
		this.quantas = 0
		this.quais = ''
	}
}

var arrayAtletas = [
	{
		nome: 'Luiz Henrique',
		idade: 20,
		sexo: 'Masculino',
		febre: 's',
		temp_max: 38,
		kit: 's',
		medalhas: 'n'
	},
	{
		nome: 'Fabiana',
		idade: 20,
		sexo: 'Feminino',
		febre: 'n',
		sintomas: 's',
		kit: 's',
		medalhas: 'n'
	},
	{
		nome: 'José Gabriel',
		idade: 20,
		sexo: 'Masculino',
		febre: 'n',
		sintomas: 'n',
		kit: 's',
		medalhas: 'n'
	}
]

var qtdAtletas = 3

function main() {
	let loop = true
	while(loop) {
		let opcao = menu()
		switch(parseInt(opcao)) {
			case 1:
				cadastrarAtleta()
				break
			case 2:
				console.log(`Quantidade de atletas: ${this.qtdAtletas}`)
				console.log(arrayAtletas)
				break
			case 3:
				relatorioAtletas()
				break
			case 4:
				console.log('Programa finalizado')
				loop = false
				break
			default:
				console.log('Opção inválida')
				break
		}
	}
}

function menu() {
	console.log('1. Cadastrar Atleta')
	console.log('2. Listar Atletas')
	console.log('3. Relatórios')
	console.log('4. Sair')
	let opcao = prompt("")
	return opcao
}

function cadastrarAtleta() {
	let novoAtleta = new atleta()
	novoAtleta.nome = prompt("Digite o nome ")
	novoAtleta.idade = parseInt(prompt("Digite a idade "))
	novoAtleta.sexo = prompt("Digite o sexo ")
	novoAtleta.febre = prompt("Teve febre? S/N ")
	if(novoAtleta.febre.toLowerCase() == 's')
		novoAtleta.temp_max = parseInt(prompt("Digite a temperatura máxima "))
	else
		novoAtleta.sintomas = prompt("Teve outro sintomas? S/N ")
	novoAtleta.kit = prompt("Tomou o kit COVID? S/N ")
	novoAtleta.medalhas = prompt("Ganhou medalhas? S/N ")
	if(novoAtleta.medalhas.toLowerCase() == 's') {
		novoAtleta.quantas = parseInt(prompt("Digite a quantidade de madalhas "))
		novoAtleta.quais = prompt("Digite quais medalhas ganhou ")
	} else
		console.log("Que pena :(")
	arrayAtletas.push(novoAtleta)
	this.qtdAtletas++	
}

function relatorioAtletas() {
	console.log(`Quantidade de atletas monitorados: ${this.qtdAtletas}`)
	console.log(`Quantidade de atletas com sintomas: ${qtdAtletasSintomas()}`)
	console.log(`Porcentagem de atletas com sintomas: ${porcentagemAtletasSintomas()}%`)
	console.log(`Idade média de todos os atletas: ${idadeMediaTodosAtletas()}`)
	console.log(`Idade média dos atletas sintomáticos: ${idadeMediaAtletasSintomaticos()}`)
}

function qtdAtletasSintomas() {
	let qtdSintomas = 0
	for(let i = 0; i < this.qtdAtletas; i++) {
		if(arrayAtletas[i].febre.toLowerCase() == 's' || 
		   arrayAtletas[i].sintomas.toLowerCase() == 's')
				qtdSintomas++
	}
	return qtdSintomas
}

function porcentagemAtletasSintomas() {
	let porcentagem = qtdAtletasSintomas() * 100 / this.qtdAtletas
	return parseFloat(porcentagem.toFixed(2))
}

function idadeMediaTodosAtletas() {
	let somaIdades = 0
	let mediaIdades = 0
	for(let i = 0; i < this.qtdAtletas; i++) {
		somaIdades += arrayAtletas[i].idade
	}
	mediaIdades = somaIdades / this.qtdAtletas
	return parseFloat(mediaIdades.toFixed(1))
}

function idadeMediaAtletasSintomaticos() {
	let somaIdades = 0
	let mediaIdades = 0
	for(let i = 0; i < this.qtdAtletas; i++) {
		if(arrayAtletas[i].febre.toLowerCase() == 's' || 
		   arrayAtletas[i].sintomas.toLowerCase() == 's') {
				somaIdades += arrayAtletas[i].idade
		}
	}
	mediaIdades = somaIdades / qtdAtletasSintomas()
	return parseFloat(mediaIdades.toFixed(1))
}

main()