const url = 'http://localhost:3000/notes'

document.addEventListener('submit', function(event) {
    event.preventDefault()
    const notesinput = document.querySelector('#notesinput').value
    console.log(notesinput)

    fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ notesItem : notesinput, created_at: moment().format()
        }) 
    })
            .then(res => res.json())
    .then(data => {
        const noteslist = document.querySelector('#noteslist')
        const notesItemEl = document.createElement('li')
        notesItemEl.innerText = data.notesItem
        notesList.appendChild(notesItemEl)
    })
})
fetch(url)
    .then(res => res.json())
    .then(notesData => {
        const noteslist = document.querySelector('#noteslist')
        for (const item of notesData) {
            console.log(item)
            const notesItemEl = document.createElement('li')
            notesItemEl.innerText = item.notesItem
            noteslist.appendChild(notesItemEl)
        }
    })
    function createnotes(){

    }
    

    function deletenotes (notesId) {
        fetch(url + '/' + notesId, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => const notesToRemove = document.querySelector(`li[data-id='${notesId}']`)
            notesToRemove.remove()
        })
}


noteslist.addEventListener ('click', function (e){
    if (e.target.matches('delete')){
        console.log(e.target.parentElement.dataset.id)
        deletenotes(e.target.parentElement.dataset.id)