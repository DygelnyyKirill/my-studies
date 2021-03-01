"use strict"
    const formLogin = document.getElementById('login');
    const formRegist = document.getElementById('register');

    const message = {
        loading: 'img/load.gif',
    }
    
    const formSend = (form, path) => (e) => {
        e.preventDefault();
        const error = formValidate(form);

        const statusMessage = document.createElement('img');
        statusMessage.src = message.loading;
        statusMessage.className = 'load-form';

        if (error === 0) {
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
                showModal(data);
            }).catch(() => {
                showModal();
            }).finally(() => {
                form.reset();
                statusMessage.remove()
            })
        } else {
            console.log('This is a required field.');
        };
    };

    formLogin.addEventListener('submit', formSend(formLogin, 'login'));
    formRegist.addEventListener('submit', formSend(formRegist, 'register'));
