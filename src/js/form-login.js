"use strict"
    const formLogin = document.getElementById('login');
    const formRegist = document.getElementById('register');
    // const password = document.getElementById('password');
    
    

    const message = {
        loading: 'Load...',
        success: 'Your data has been sent',
        failure: 'User is not found'
    }
    
    const formSend = (form, path) => (e) => {
        e.preventDefault();
        const error = formValidate(form);
        let emailInput = form.querySelector('._email');
        let passwordInput = form.querySelector('._password');
        let userInput = form.querySelector('._user');

        if (error === 0) {
            const statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            statusMessage.textContent = message.loading;
            formLogin.append(statusMessage);
            
            const body = {
                // user: userInput.value,
                email: emailInput.value,
                password: passwordInput.value
            };

            const xhr = new XMLHttpRequest(); 
            const url = `http://localhost:3000/auth/${path}`; 
            xhr.open("POST", url); 
            xhr.setRequestHeader("Content-Type", "application/json"); 
            const data = JSON.stringify(body); 
            xhr.send(data);

            xhr.addEventListener('load', () => {
                if (xhr.status < 400) {
                    console.log(xhr.response);
                    statusMessage.textContent = message.success;
                    formLogin.reset();
                    setTimeout(() => {
                        statusMessage.remove();
                    }, 2000);
                } else {
                    statusMessage.textContent = message.failure;
                    formLogin.reset();
                    setTimeout(() => {
                        statusMessage.remove();
                    }, 2000);
                }
            });
        } else {
            console.log('This is a required field.');
        };
    };

    formLogin.addEventListener('submit', formSend(formLogin, 'login'));
    formRegist.addEventListener('submit', formSend(formRegist, 'register'));
