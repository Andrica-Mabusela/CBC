const contactForm = document.querySelector('.contact-form')

let firstName = document.getElementById('firstName')
let lastName = document.getElementById('lastName')
let email = document.getElementById('email')
let subject = document.getElementById('subject')
let message = document.getElementById('message')


function showBox(){
    document.querySelector('#overlay').style.display = 'block'
    document.querySelector('#sentMailBox').style.display = 'block'
}

document.querySelector('#sentMailBox button').addEventListener('click', () => {

    document.querySelector('#overlay').style.display = 'none'
    document.querySelector('#sentMailBox').style.display = 'none'

    document.querySelector('#sending-email').style.display = 'none'
})



contactForm.addEventListener('submit', (e) => {
    e.preventDefault()

    document.querySelector('#sending-email').style.display = 'block'

    let formData = {
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value,
        subject: subject.value,
        message: message.value
    }


    let xhr = new XMLHttpRequest()
    xhr.open('POST', '/')

    xhr.setRequestHeader('content-type', 'application/json')
    
    xhr.onload = function(){
        console.log(xhr.responseText)

        if(xhr.responseText == 'success'){
            showBox()
            firstName.value = ''
            lastName.value = ''
            email.value = ''
            subject.value = ''
            message.value = ''
        }else{
            alert('something went wrong!')
        }
    }

    xhr.send(JSON.stringify(formData))


} )