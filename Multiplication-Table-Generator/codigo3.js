function tabuada() {
    
    let num = window.document.querySelector('input#num')
    let tab = window.document.querySelector('select#stab')

    if(num.value.length == 0) {
        window.alert('Por favor, insira um número.')
    } else {
        let n = Number(num.value)
        tab.innerHTML = ""
        for(let i = 1; i <= 10; i++) {
            let item = document.createElement('option')
            item.text = `${n} x ${i} = ${n*i}`
            tab.appendChild(item)
        }
    }
}