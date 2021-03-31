function formValidate(form) {
    let error = 0;
    let emailInput = form.querySelector('._email');
    let passwordInput = form.querySelector('._password');


    [emailInput, passwordInput].forEach((input) => fieldRemoveError(input))

        if (validateEmail(emailInput)) {
            fieldAddError(emailInput);
            error++;
        }   

        if (passwordInput.value === '') {
            fieldAddError(passwordInput);
            error++;
        }
    return error;
}

function fieldAddError(input) {
    input.parentElement.classList.add('_error');
    input.classList.add('_error');
    console.log('This is a required field.')
}

function fieldRemoveError(input) {
    input.parentElement.classList.remove('_error');
    input.classList.remove('_error');
    console.log('ok')
}

function validateEmail(input) {
    return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
}

function isValid(value) {
    return value.lenght >= 5
}