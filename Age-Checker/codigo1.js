function verificar() {
    
    var data_atual = new Date().getFullYear()
    var data_digitada = window.document.querySelector('input#nasc')
    var verificacao = window.document.querySelector('input#ver')
    
    if(data_digitada.value.length == 0 || data_digitada.value > data_atual) {
        window.alert('[ERRO] Os dados informados estão incorretos!')
    } else {
        var idade = data_atual - Number(data_digitada.value)
        var bsex = window.document.getElementsByName('bsexo')
        var genero = ''
        var imagem = window.document.createElement('img')
        imagem.setAttribute('id', 'foto')
        if(bsex[0].checked) {
            genero = 'masculino'
            if(idade >= 0 && idade < 13) {
                imagem.setAttribute('src', 'imagens/crianca-imagem-m.png')
            } else if (idade < 18) {
                imagem.setAttribute('src', 'imagens/adolescente-imagem-m.png')
            } else if (idade < 40) {
                imagem.setAttribute('src', 'imagens/adulto-imagem-m.png')
            } else if(idade < 60) {
                imagem.setAttribute('src', 'imagens/meiaidade-imagem-m.png')
            } else {
                imagem.setAttribute('src', 'imagens/idoso-imagem-m.png')
            }
        } else {
            genero = 'feminino'
            if(idade >= 0 && idade < 13) {
                imagem.setAttribute('src', 'imagens/crianca-imagem-f.png')
            } else if (idade < 18) {
                imagem.setAttribute('src', 'imagens/adolescente-imagem-f.png')
            } else if (idade < 40) {
                imagem.setAttribute('src', 'imagens/adulto-imagem-f.png')
            } else if(idade < 60) {
                imagem.setAttribute('src', 'imagens/meiaidade-imagem-f.png')
            } else {
                imagem.setAttribute('src', 'imagens/idoso-imagem-f.png')
            }
        }
        res.style.textAlign = 'center'
        res.style.padding = '20px'
        if(idade == 1) {
            res.innerHTML = `Pessoa com ${idade} ano de idade do sexo ${genero}.</br></br>`
        } else {
            res.innerHTML = `Pessoa com ${idade} anos de idade do sexo ${genero}.</br></br>`
        }
        res.appendChild(imagem)
    }       
}