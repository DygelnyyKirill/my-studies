"use strict"
    const formLogin = document.getElementById('login');
    const formRegist = document.getElementById('register');

    const message = {
        loading: 'img/load.gif',
    }

    const statusMessage = document.createElement('img');
    statusMessage.src = message.loading;
    statusMessage.className = 'load-form';

    
    const formSend = (form, path) => (e) => {
        e.preventDefault();
        const error = formValidate(form);

        if (error === 0) {
            form.append(statusMessage);
      
            const formData = new FormData(form);
            const json = JSON.stringify(Object.fromEntries(formData.entries()));
            
            fetch(`http://localhost:3000/auth/${path}`, {
                method: "POST",
                body: json,
                headers: {
                    "Content-Type": "application/json"
                }
            }).then(data => {
                console.log(data.text());
                showModal();
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
