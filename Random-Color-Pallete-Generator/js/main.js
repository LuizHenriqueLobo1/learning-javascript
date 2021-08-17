document.getElementById('btn-action').addEventListener('click', () => {

    for(let i = 0; i < 5; i++) {
        let color    = document.getElementById(`color-${i+1}`)
        let txtColor = document.getElementById(`txt-color-${i+1}`)
        let newColor = generateColor()
        color.style.backgroundColor = `${newColor}`
        txtColor.value = `${newColor}`
    } 
})

function generateColor() {

    const chars = '0123456789ABCDEF'
    let color   = '#'

    for(let i = 0; i < 6; i++) {
        color += chars.charAt(Math.floor(Math.random() * chars.length))
    }

    return color;
}

function copyColor(num) {

    let myColor = document.getElementById(`txt-color-${num}`)
    myColor.select()
    document.execCommand('copy')
}