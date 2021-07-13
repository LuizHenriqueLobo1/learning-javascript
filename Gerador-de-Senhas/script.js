function gerarSenha() {
    let tam = window.document.querySelector('input#tamanho')
    let result = window.document.querySelector('p#senhaGerada')
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!?+-=_.,;<>/@#$%&*()[]{}'

    result.innerHTML = ''

    if(tam.value < 5 || tam.value > 25) {
        window.alert('A senha deve ter tamanho entre 5 e 25.')
        result.innerHTML = ''
    } else {
        for(var i = 0; i < tam.value; i++)
            result.innerHTML += caracteres.charAt(Math.floor(Math.random() * caracteres.length))
    }
}