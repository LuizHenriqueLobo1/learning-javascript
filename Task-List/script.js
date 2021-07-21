let newTask   = document.getElementById('task')
let placeTask = document.getElementById('container')
let addTask   = document.getElementById('add')

newTask.addEventListener('keypress', function(f) {
    if(f.key == "Enter")
        generateTask()
})

addTask.addEventListener('click', function(f) {
    generateTask()
})

function generateTask() {
    let task = document.createElement('p')
    task.textContent = `${newTask.value}`
    placeTask.appendChild(task)
    document.getElementById('task').value = ''
}