let nameError = document.getElementById('name-error')
let phoneError = document.getElementById('phone-error')
let emailError = document.getElementById('email-error')
let messsageError = document.getElementById('message-error')
let submitError = document.getElementById('submit-error')

function validateName(){
    let nameInput = document.getElementById('name-input').value

    if(nameInput.length === 0){
        nameError.innerHTML = "Name is reqired"
        return false
    }
    if(!nameInput.match(/^[A-Z]+\s[A-Z]+$/i)){
        nameError.innerHTML = "Write full name"
        return false

    }
    nameError.innerHTML = '<i class="fa-solid fa-check"></i>'
    return true

}

function validatePhone(){
    let phoneInput = document.getElementById('phone-input').value
    if(phoneInput.length == 0){
        phoneError.innerHTML = 'Phone number is required'
        return false
    }
    if(!phoneInput.match(/^[0-9]{10}$/)){
        phoneError.innerHTML = 'Enter valid Phone Number'
        return false
    }

    phoneError.innerHTML = '<i class="fa-solid fa-check"></i>'
    return true
}


function validateEmail(){
    let EmailInput = document.getElementById('Email-input').value

    if(EmailInput == 0){
        emailError.innerHTML = 'Email is required'
        return false
    }
    if(!EmailInput.match(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/)){
        emailError.innerHTML = 'Invalid Email Address'
        return false
    }
    emailError.innerHTML = '<i class="fa-solid fa-check"></i>'
    return true
}