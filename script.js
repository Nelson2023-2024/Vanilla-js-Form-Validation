let form = document.getElementById('contact-form');
let nameError = document.getElementById('name-error');
let phoneError = document.getElementById('phone-error');
let emailError = document.getElementById('email-error');
let messsageError = document.getElementById('message-error');
let submitError = document.getElementById('submit-error');

function validateForm() {
    // Perform validation for each field
    const isNameValid = validateName();
    const isPhoneValid = validatePhone();
    const isEmailValid = validateEmail();
    const isMessageValid = validateMessage();

    // Check if all fields are valid
    if (isNameValid && isPhoneValid && isEmailValid && isMessageValid) {
        // If all validations pass, remove the event listener to allow form submission
        form.removeEventListener('submit', formSubmissionHandler);
        console.log('Form validation passed. Form will be submitted.');
    } else {
        console.log('Form validation failed. Submission prevented.');
    }
}

function formSubmissionHandler(e) {
    e.preventDefault();
    validateForm();
}

// Event listener for form submission
form.addEventListener('submit', formSubmissionHandler);

// Rest of the validation functions remain the same

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

function validateMessage(){
    let messageInput = document.getElementById('message-input').value
    let required = 30
    let left = required - messageInput.length

    if(left > 0){
        messsageError.innerHTML = left + " more characters required"
        return false
    }
    messsageError.innerHTML = '<i class="fa-solid fa-check"></i>'

    return true
 
}