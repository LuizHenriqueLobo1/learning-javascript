document.getElementById('btn').addEventListener('click', () => {
    let newColor = generateColor()
    let txtColor = document.getElementById('color')
    document.body.style.backgroundColor = `${newColor}`
    txtColor.textContent = `${newColor}`
})

function generateColor() {
    const chars = '0123456789ABCDEF'
    let color = '#'
    
    for(let i = 0; i < 6; i++) {
        color += chars.charAt(Math.floor(Math.random() * chars.length))
    }

    return color;
}