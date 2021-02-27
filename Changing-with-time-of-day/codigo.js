function carregar() {
    var msg =  window.document.querySelector('div#msg')
    var img =  window.document.querySelector('img#imagem')
    var hora = new Date().getHours()
    msg.innerHTML = `Agora são <strong>${hora} horas</strong>.`
    if(hora >= 0 && hora <= 12) {
        img.src = 'imagens/imagemorning.png'
        document.body.style.background = '#6d8f98' 
    } else if(hora >= 13 && hora <= 18) {
        img.src = 'imagens/imageafternoon.png'
        document.body.style.background = '#c29777'
    } else {
        img.src = 'imagens/imagenight.png'
        document.body.style.background = '#042f35'
    }
}