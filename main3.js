const modal = document.querySelector('.form')
const regist = document.querySelector('.regist')

regist.addEventListener('click', (event) => { 
    modal.classList.toggle('hidden')
})

// modal.addEventListener('click', (event) => {
//     event.stopImmediatePropagation()
//     modal.classList.add('hidden')
// }, true)

const formContent = modal.querySelector('.form-content')

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

formContent.addEventListener('click', (event) => {
    console.log("form content");
    event.preventDefault()
    
    if (event.target.classList.contains('exit')) {
        console.log('exit');
        modal.classList.add('hidden')
    }

    show.addEventListener('mousedown', (event) => {
        event.preventDefault()
        inputPassword.setAttribute('type','text')
    })

    show.addEventListener('mouseup', (event) => {
        event.preventDefault()
        inputPassword.setAttribute('type','password')
    })

})

inputPassword.addEventListener('blur', (event) => {
    if (inputPassword.validity.tooShort) {
        inputPassword.setCustomValidity('Пароль не должен быть меньше 6 символов')
        // inputPassword.reportValidity();
        passwordText.classList.remove('hidden')
    }
    else {
        passwordText.classList.add('hidden')
    }
})


inputEmail.addEventListener('blur', (event) => {
    event.preventDefault();
    if (inputEmail.validity.typeMismatch) {
        inputEmail.setCustomValidity('Неправильный формат email')
        // inputEmail.reportValidity();
        emailText.classList.remove('hidden')
    }
    else {
        emailText.classList.add('hidden')
    }
    console.log(inputEmail.validity); 
})

// function onSubmit () {
//     form.submit();
// }





