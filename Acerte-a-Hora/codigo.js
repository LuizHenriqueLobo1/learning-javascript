let hora  = window.document.querySelector('input#num')
let agora = new Date().getHours() 

function verificar() {
    
    if(hora.value == agora) {
        saida.innerHTML = `Yes, now is the time (${hora.value} hours)!`
    } else {
        saida.innerHTML = ''
    }
}