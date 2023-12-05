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