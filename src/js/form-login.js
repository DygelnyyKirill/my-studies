"use strict"
document.addEventListener('DOMContentLoaded', function() {
    const formLogin = document.getElementById('login');
    const formRegist = document.getElementById('register');
    const user = document.getElementById('user');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    
    formLogin.addEventListener('submit', formSend);
    formRegist.addEventListener('submit', formReg);

    const message = {
        loading: 'Load...',
        success: 'Your data has been sent',
        failure: 'User is not found'
    }

    function formSend(e) {
        e.preventDefault();
        let error = formValidate(formLogin);
       
        if (error === 0) {
            const statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            statusMessage.textContent = message.loading;
            formLogin.append(statusMessage);
            
            const body = {
                email: email.value,
                password: password.value
            };

            const xhr = new XMLHttpRequest(); 
            const url = "http://localhost:3000/auth/login"; 
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
    function formReg(e) {
        e.preventDefault();
        let error = formValidate(formRegist);
       
        if (error === 0) {
            const statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            statusMessage.textContent = message.loading;
            formLogin.append(statusMessage);
            
            const body = {
                user: user.value,
                email: email.value,
                password: password.value
            };

            fetch('http://localhost:3000/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(body)
            })
            .then(data => {
                console.log(data);
            })
            .then(response => {
                if (response < 400) {
                    return response.json()
                    } 
            })
        } else {
            console.log('This is a required field.');
        };
    };
});