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
		sintomas: '',
		kit: 's',
		medalhas: 'n',
		quantas: 0,
		quais: ''
	},
	{
		nome: 'Fabiana',
		idade: 21,
		sexo: 'Feminino',
		febre: 'n',
		temp_max: 0,
		sintomas: 's',
		kit: 's',
		medalhas: 's',
		quantas: 1,
		quais: 'Ouro'
	},
	{
		nome: 'José Gabriel',
		idade: 18,
		sexo: 'Masculino',
		febre: 'n',
		temp_max: 0,
		sintomas: 'n',
		kit: 's',
		medalhas: 'n',
		quantas: 0,
		quais: ''
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
	console.log(`Quantidade de atletas com sintomas: ${qtdAtletasSintomaticos()}`)
	console.log(`Porcentagem de atletas com sintomas: ${porcentagemAtletasSintomas()}%`)
	console.log(`Idade média de todos os atletas: ${idadeMediaTodosAtletas()}`)
	console.log(`Idade média dos atletas sintomáticos: ${idadeMediaAtletasSintomaticos()}`)
	console.log(`Idade média dos atletas assintomáticos: ${idadeMediaAtletasAssintomaticos()}`)
	console.log(`Temperatura corporal mais alta relatada: ${temperaturaMaximaRelatada()}`)
	console.log(`Menor idade entre os atletas sintomáticos: ${atletaMaisNovoSintomatico()}`)
	console.log(`Maior idade entre os atletas sintomáticos: ${atletaMaisVelhoSintomatico()}`)
	atletasTomaramKitPorGeneroQtdSintomaticos('Masculino')
	atletasTomaramKitPorGeneroQtdSintomaticos('Feminino')
}

function qtdAtletasSintomaticos() {
	let qtdSintomaticos = 0
	for(let i = 0; i < this.qtdAtletas; i++) {
		if(checaString(arrayAtletas[i].febre, arrayAtletas[i].sintomas, 's') == 'iguais')
			qtdSintomaticos++
	}
	return qtdSintomaticos
}

function qtdAtletasAssintomaticos() {
	let qtdAssintomaticos = 0
	for(let i = 0; i < this.qtdAtletas; i++) {
		if(checaString(arrayAtletas[i].febre, arrayAtletas[i].sintomas, 's') != 'iguais')
			qtdAssintomaticos++
	}
	return qtdAssintomaticos
}

function porcentagemAtletasSintomas() {
	let porcentagem = qtdAtletasSintomaticos() * 100 / this.qtdAtletas
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
		if(checaString(arrayAtletas[i].febre, arrayAtletas[i].sintomas, 's') == 'iguais') {
				somaIdades += arrayAtletas[i].idade
		}
	}
	mediaIdades = somaIdades / qtdAtletasSintomaticos()
	return parseFloat(mediaIdades.toFixed(1))
}

function idadeMediaAtletasAssintomaticos() {
	let somaIdades = 0
	let mediaIdades = 0
	for(let i = 0; i < this.qtdAtletas; i++) {
		if(checaString(arrayAtletas[i].febre, arrayAtletas[i].sintomas, 's') != 'iguais') {
				somaIdades += arrayAtletas[i].idade
		}
	}
	mediaIdades = somaIdades / qtdAtletasAssintomaticos()
	return parseFloat(mediaIdades.toFixed(1))
}

function checaString(string1, string2, string3) {
	for(let i = 0; i < this.qtdAtletas; i++) {
		if(string1.toLowerCase().localeCompare(string3) == 0 ||
		   string2.toLowerCase().localeCompare(string3) == 0)
				return 'iguais'
	}
}

function temperaturaMaximaRelatada() {
	let tempMax = 0
	for(let i = 0; i < this.qtdAtletas; i++) {
		if(arrayAtletas[i].temp_max > tempMax)
			tempMax = arrayAtletas[i].temp_max
	}
	return tempMax
}

function atletaMaisNovoSintomatico() {
	let menorIdade = arrayAtletas[0].idade
	for(let i = 0; i < qtdAtletas; i++) {
		if(checaString(arrayAtletas[i].febre, arrayAtletas[i].sintomas, 's') == 'iguais') {
			if(menorIdade > arrayAtletas[i].idade)
				menorIdade = arrayAtletas[i].idade
		}
	}
	return menorIdade
}

function atletaMaisVelhoSintomatico() {
	let maiorIdade = 0
	for(let i = 0; i < qtdAtletas; i++) {
		if(checaString(arrayAtletas[i].febre, arrayAtletas[i].sintomas, 's') == 'iguais') {
			if(maiorIdade < arrayAtletas[i].idade)
				maiorIdade = arrayAtletas[i].idade
		}
	}
	return maiorIdade
}

function atletasTomaramKitPorGeneroQtdSintomaticos(sexo) {
	let qtdSintomaticos = 0
	console.log(`Atletas do sexo ${sexo} que tomaram o kit:`)
	console.log(`--------------------------`)
	for(let i = 0; i < qtdAtletas; i++) {
		if(arrayAtletas[i].sexo.localeCompare(sexo) == 0) {
			if(arrayAtletas[i].kit.localeCompare('s') == 0) {
				console.log(`Nome     : ${arrayAtletas[i].nome}`)
				console.log(`Sexo     : ${arrayAtletas[i].sexo}`)
				console.log(`Febre    : ${arrayAtletas[i].febre}`)
				console.log(`Sintomas : ${arrayAtletas[i].sintomas}`)
				console.log(`Kit      : ${arrayAtletas[i].kit}`)
				console.log(`--------------------------`)
				if(checaString(arrayAtletas[i].febre, arrayAtletas[i].sintomas, 's')) {
					qtdSintomaticos++
				}
			}
		}
	}
	console.log(`Quantidade de atletas do sexo ${sexo} que tomaram o kit e sao sintomaticos: ${qtdSintomaticos}`)
}

main()