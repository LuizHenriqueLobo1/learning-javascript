let newTask   = document.getElementById('task')
let placeTask = document.querySelector('.content')
let addTask   = document.getElementById('add')
var id = 1

newTask.addEventListener('keypress', function(f) {
    if(f.key == "Enter")
        generateTask()
})

addTask.addEventListener('click', function(f) {
    generateTask()
})

function generateTask(id) {

    if(newTask.value.length >= 3) {
        let field = document.createElement('div')
        let task = document.createElement('p')
        let btn = document.createElement('input')

        field.setAttribute('class', 'new-task')
        field.setAttribute('id', `task${this.id}`)
        btn.setAttribute('class', 'delete')
        btn.setAttribute('type', 'button')
        btn.setAttribute('value', 'x')
        btn.setAttribute('onclick', 'deleteTask(`${this.parentNode.id}`)')

        task.textContent = `${newTask.value}`
        field.appendChild(task)

        field.appendChild(btn)
        placeTask.appendChild(field)

        document.getElementById('task').value = ''
        this.id++
    }
}

function deleteTask(trashTask) {
    document.getElementById(trashTask).remove()
}