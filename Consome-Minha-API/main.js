function getRequest() {
    let request = new XMLHttpRequest()
    request.open("GET", "http://localhost:3001/people", false)
    request.send()
    return request.responseText
}

function addList() {
    
    let content = JSON.parse(getRequest())
    let list    = document.getElementById('list')

    content.forEach(element => {
        let name  = document.createElement('li')  
        let age = document.createElement('span')
        name.textContent = element.name
        age.textContent = element.age
        list.appendChild(name)
        list.appendChild(age)
    });
}

document.getElementById('button').addEventListener('click',() => {
    addList()
})
