function saveNote() {
    
    let note = document.getElementById('note').value 
    let outputNote = document.getElementById('container')
    let savedNote = document.createElement('p')
    
    document.getElementById('note').value = ''

    savedNote.textContent = `${note}`

    outputNote.appendChild(savedNote)
}