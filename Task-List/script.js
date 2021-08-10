let newTask   = document.getElementById('task')
let placeTask = document.querySelector('.container')
let addTask   = document.getElementById('add')

newTask.addEventListener('keypress', function(f) {
    if(f.key == "Enter")
        generateTask()
})

addTask.addEventListener('click', function(f) {
    generateTask()
})

function generateTask() {
    let field = document.createElement('div')
    let task = document.createElement('p')
    field.setAttribute('class', 'new-task')
    task.textContent = `${newTask.value}`
    field.appendChild(task)
    placeTask.appendChild(field)
    document.getElementById('task').value = ''
}