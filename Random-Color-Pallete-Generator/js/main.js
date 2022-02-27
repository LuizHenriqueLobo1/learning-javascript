let colors = Array(5).fill('#FFFFFF');
let savedColors = [];

const renderColors = () => {
    colors.forEach((color, index) => {
        document.querySelector(`#color-${index+1}`).style.backgroundColor = color;
        document.querySelector(`#txt-color-${index+1}`).value = color;
    });
}

document.querySelector('#btn-action').onclick = () => {
    setRandomColorsArray();
    renderColors();
}

function generateColor() {
    const chars = '0123456789ABCDEF'
    let color   = '#'
    for(let i = 0; i < 6; i++) {
        color += chars.charAt(Math.floor(Math.random() * chars.length))
    }
    return color;
}

function setRandomColorsArray() {
    colors = colors.map(color => color = generateColor());
    if (savedColors.length) savedColors.forEach(savedColor => colors[savedColor.index] = savedColor.color);
}

function copyColor(num) {
    let myColor = document.getElementById(`txt-color-${num}`)
    myColor.select()
    document.execCommand('copy')
}

function lockColor(index) {
    const savedColor = { index: index, color: colors[index] };
    const savedColorIndex = savedColors.findIndex(sc => 
        sc.index === savedColor.index && sc.color === savedColor.color);
    if(savedColorIndex === -1) {
        savedColors.push(savedColor);
        document.querySelector(`#lock-icon-${index+1}`).textContent = 'lock';
    } else {
        savedColors.splice(savedColorIndex, 1);
        document.querySelector(`#lock-icon-${index+1}`).textContent = 'lock_open';
    }
}
