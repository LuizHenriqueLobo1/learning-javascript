function contar() {
    
    let inicio = window.document.querySelector('input#ini')
    let fim    = window.document.querySelector('input#fim')
    let passos = window.document.querySelector('input#pas')

    if(inicio.value.length == 0 || fim.value.length == 0 || passos.value.length == 0) {
        window.alert("[ERRO] Você não informou os dados corretamente!")
        res.innerHTML = 'Preparando contagem...'
    } else {
        res.innerHTML = 'Contando: '
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passos.value)

        if(i < f) {
            for(let c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{27A1}`
            }
            res.innerHTML += `\u{1F3C1}`
        } else {
            for(let c = i; c >= f; c-= p) {
                res.innerHTML += `${c} \u{27A1}`
            }
            res.innerHTML += `\u{1F3C1}`
        }  
    }
}