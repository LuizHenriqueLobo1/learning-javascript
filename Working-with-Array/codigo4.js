let num   = window.document.querySelector('input#num')
let lista = window.document.querySelector('select#lista')
let res   = window.document.querySelector('div#saida')
let valores = []

function isNum(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inList(n, l) {
    if(l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if(isNum(num.value) && !inList(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert('Insira um número entre 1 e 100, que não esteja na lista!')
    }
    num.value = ''
    num.focus()
}

function analisar() {
    if(valores.length == 0) {
        window.alert('A tabela está vazia!')
    } else {
        //TOTAL DE VALORES
        let total = valores.length
        //SOMA DOS VALORES
        let soma = 0
        for(let i in valores) {
            soma += valores[i]
        }
        //MÉDIA DOS VALORES
        let media = soma / valores.length
        //MAIOR E MENOR VALOR
        let maiorvalor = valores[0]
        let menorvalor = valores[0]
        for(let i in valores) {
            if(valores[i] > maiorvalor)
                maiorvalor = valores[i]
            if(valores[i] < menorvalor)
                menorvalor = valores[i]
        }

        res.innerHTML = ''

        if(total == 1) {
            res.innerHTML += `<p>Temos ${total} valor cadastrado</p>` 
        } else {
            res.innerHTML += `<p>Temos ${total} valores cadastrados</p>` 
        }
        res.innerHTML += `<p> O menor valor é ${menorvalor}</p>`
        res.innerHTML += `<p> O maior valor é ${maiorvalor}</p>`
        res.innerHTML += `<p>A soma dos valores é ${soma}</p>`
        res.innerHTML += `<p>A média dos valores é ${media}</p>` 
    }
}