var qtdNotes = 0

function saveNote(qtdNotes) {
    
    let note = document.getElementById('note').value 
    let outputNote = document.getElementById('container')
    let savedNote = document.createElement('p')
    
    if(this.qtdNotes < 6) {
        document.getElementById('note').value = ''
        
        savedNote.textContent = `${note}`
        
        outputNote.appendChild(savedNote)
        
        this.qtdNotes++
    } else
        window.alert('Notes limit reached.')
}