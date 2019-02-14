//adding an event handler
function submitComment() {
    event.preventDefault()
    //gathering data
    const inputField = document.getElementById('name')
    const name = inputField.value
    const textArea = document.getElementById('msg')
    const msg = textArea.value
    
    //checking the values


    //Creating new html elements below
    const comment = document.createElement('section')
    const h3 = document.createElement('h3')
    const p = document.createElement('p')


    if(doesNotPassAllValidations(name, msg, comment)) {
        return null
    }
    //adjust the created elements
    h3.innerHTML = `${name} said:`
    p.innerHTML = msg


    comment.classList.add('comment')

    comment.appendChild(h3)
    comment.appendChild(p)

    console.log(comment)
    
    const commentSection  = document.getElementById('comments')
    console.log(commentSection)
    commentSection.appendChild(comment)

    inputField.value = null
    textArea.value = null



}


function doesNotPassAllValidations(name, msg, comment) {
    if(!name || !msg) {
        alert('Come on, it is not that hard to fill in your name or message...')
         return true
     }

     if(comment.length > 280) {
        alert('Comment too long. You are FIRED!')
        return true

    } else {
        return false
    }
}


 //!name || !msg