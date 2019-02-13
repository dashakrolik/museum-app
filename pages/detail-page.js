//adding an event handler
function submitComment() {

    //gathering data
    const inputField = document.getElementById('name')
    const name = inputField.value
    const textArea = document.getElementById('msg')
    const msg = textArea.value

    //Creating new html elements below
    const comment = document.createElement('section')
    const h3 = document.createElement('h3')
    const p = document.createElement('p')

    //adjust the created elements
    h3.innerHTML = `${name} said:`
    p.innerHTML = msg.value

    //comment.classList.add('')
    
    comment.appendChild(h3)
    console.log(comment, h3)

    document.body.appendChild(comment);

    /*
    */

}


//comment.classList.add('')
//comment.appendChild('h3', 'p')
