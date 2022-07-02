const output = document.querySelector('.output'); 
const hour   = document.querySelector('.input-number');
const now    = new Date().getHours();

document.querySelector('.btn-action').onclick = () => {
    output.textContent = parseInt(hour.value) === now ? 'Acertou!' : 'Errou!'; 
}
