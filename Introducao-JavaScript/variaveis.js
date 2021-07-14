var   a 		// declara uma variável, opcional ser inicializada
let   b 		// declara uma variável no escopo de um bloco, opcional ser inicializada
const c = 1 	// declara uma variável constante, obrigatório ser inicializada

// números
let i   = 1
console.log(`${i} é do tipo ${typeof i}`)
let r   = 1.2
console.log(`${r} é do tipo ${typeof r}`)

const max = Number.MAX_SAFE_INTEGER // atribui o maior valor inteiro seguro
console.log(`${max} é o maior número inteiro seguro possível`)
const min = Number.MIN_SAFE_INTEGER // atribui o menor valor inteiro seguro
console.log(`${min} é o menor número inteiro seguro possível`)

const max_valor = Number.MAX_VALUE // atribui o maior valor possível
console.log(`${max_valor} é o maior valor possível`)
const min_valor = Number.MIN_VALUE // atribui o menor valor possível
console.log(`${min_valor} é o menor valor possível`)

// booleanos
let v = true	// atribui o valor booleano 'true'
console.log(`${v} é do tipo ${typeof v}`)
let f = false	// atribui o valor booleano 'false'
console.log(`${f} é do tipo ${typeof f}`)

// caracteres
const l1 = 'a'	// declara um caractere usando '' 
const l2 = "a"	// declara um caractere usando ""
const l3 = `a`	// declara um caractere usando ``
console.log(`${l1} = ${l2} = ${l3} = ${typeof l1}`)

const s1 = 'Olá, tudo bem?' // declara uma string usando ''
const s2 = "Olá, tudo bem?" // declara uma string usando ""
const s3 = `Olá, tudo bem?` // declara uma string usando ``
console.log(`${s1} = ${s2} = ${s3} = ${typeof s1}`)

// objetos
let n = null;		// declara um valor null
console.log(`${n} é do tipo ${typeof n}`)

var vet = [1, 2, 3]	// declara um vetor de números
console.log(`${vet} é do tipo ${typeof vet}`)

var vet_key = {um: '1', dois: '2', tres: '3'} // declara um vetor com chaves e valores
console.log(vet_key)

// indefinido
let u = undefined;	// declara um valor indefinido
console.log(`${u} é do tipo ${typeof u}`)