onload = () => {
    var msg  = document.querySelector('#msg');
    var img  = document.querySelector('#imagem');
    var hour = new Date().getHours();
    msg.innerHTML = `Agora são <strong>${hour} horas</strong>.`;
    if(hour >= 0 && hour <= 12) {
        img.src = 'imagens/morning.png';
        document.body.style.background = '#6d8f98' ;
    } else if(hour >= 13 && hour <= 18) {
        img.src = 'imagens/afternoon.png';
        document.body.style.background = '#c29777';
    } else {
        img.src = 'imagens/night.png';
        document.body.style.background = '#042f35';
    }
}