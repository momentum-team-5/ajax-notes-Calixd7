const url = 'http://localhost:3000/notes'

document.addEventListener('submit', function(event) {
    event.preventDefault()
    const notesInput = document.querySelector('#notesinput').value
    console.log(notesInput)

    fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ notesInput })
    })
            .then(res => res.json())
    .then(data => {
        const notesList = document.querySelector('#noteslist')
        const notesItemEl = document.createElement('li')
        notesItemEl.innerText = data.notesItem
        todoList.appendChild(notesItemEl)
    })
})