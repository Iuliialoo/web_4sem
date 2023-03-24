const modal = document.querySelector('.form')
const regist = document.querySelector('.regist')

regist.addEventListener('click', (event) => { 
    modal.classList.toggle('hidden')
})

const sendForm = modal.querySelector('.my-form')

sendForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    console.table({
        "Email": formData.get('email'),
        "Password": formData.get('password'),
    })
    modal.classList.add('hidden');
})

const formContent = modal.querySelector('.form-content')
const exitBtn = formContent.querySelector(".exit")

exitBtn.addEventListener("click", e => {
    modal.classList.add('hidden');
})

modal.addEventListener('click', (event) => {
    if (event.target === event.currentTarget) {
        modal.classList.add('hidden')
    }
})

const show = formContent.querySelector('.show')
const inputPassword = formContent.querySelector('.password')
const inputEmail = formContent.querySelector('.email')

const passwordText = formContent.querySelector('.error-password')
const emailText = formContent.querySelector('.error-email')

show.addEventListener('pointerdown', (event) => {
    event.preventDefault()
    inputPassword.setAttribute('type','text')
})

show.addEventListener('pointerup', (event) => {
    event.preventDefault()
    inputPassword.setAttribute('type','password')
})

inputPassword.addEventListener('blur', (event) => {
    if (inputPassword.validity.tooShort) {
        inputPassword.setCustomValidity('Пароль не должен быть меньше 6 символов')
        // inputPassword.reportValidity();
        // passwordText.classList.remove('hidden')
        const textPassError = sendForm.querySelector('.error-password')
        textPassError.textContent = "Парроль должен быть не меньше 6 символов"
    }
    else {
        // passwordText.classList.add('hidden')
        inputPassword.setCustomValidity("");
        textPassError.textContent = ""
    }
})


inputEmail.addEventListener('blur', (event) => {
    event.preventDefault();
    if (inputEmail.validity.typeMismatch) {
        inputEmail.setCustomValidity('Неправильный формат email')
        // inputEmail.reportValidity();
        // emailText.classList.remove('hidden')
        const textEmailError = sendForm.querySelector('.error-email')
        textEmailError.textContent = "Неверный email"
    }
    else {
        // emailText.classList.add('hidden')
        inputEmail.setCustomValidity('');
        textEmailError.textContent = ""
    }
    // console.log(inputEmail.validity); 
})