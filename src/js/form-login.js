"use strict"
    const formLogin = document.getElementById('login');
    const formRegist = document.getElementById('register');

    const message = {
        loading: 'Load...',
        success: 'Your data has been sent',
        failure: 'User is not found'
    }
    
    const formSend = (form, path) => (e) => {
        e.preventDefault();
        const error = formValidate(form);

        if (error === 0) {
            const statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            statusMessage.textContent = message.loading;
            form.append(statusMessage);
      
            const formData = new FormData(form);
            const object = {}
            formData.forEach((value, key) => {
                object[key] = value;
            });
            
            fetch(`http://localhost:3000/auth/${path}`, {
                method: "POST",
                body: JSON.stringify(object),
                headers: {
                    "Content-Type": "application/json"
                }
            }).then(data => {
                console.log(data);
                statusMessage.textContent = message.success;
                setTimeout(() => {
                    statusMessage.remove();
                }, 2000);
            }).catch(() => {
                statusMessage.textContent = message.failure;
                    setTimeout(() => {
                        statusMessage.remove();
                    }, 2000);
            }).finally(() => {
                form.reset();
            })
        } else {
            console.log('This is a required field.');
        };
    };

    formLogin.addEventListener('submit', formSend(formLogin, 'login'));
    formRegist.addEventListener('submit', formSend(formRegist, 'register'));
