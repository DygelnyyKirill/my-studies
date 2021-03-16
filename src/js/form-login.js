"use strict"
    const formBox = document.querySelector('.form-box1');
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
        const url = `http://localhost:3000/auth/${path}`

        const postData = async (url, data) => {
            const res = await fetch(url, {
                method: "POST",
                body: data,
                headers: {
                    "Content-Type": "application/json"
                }
            })

            if (!res.ok) {
                throw new Error();
            }

            return await res.json();
        }

        if (error === 0) {
            form.append(statusMessage);
      
            const formData = new FormData(form);
            const data = {};
            formData.forEach((value, key) => {
                data[key] = value;
            });

            console.log(data)
            // const data = {
            //     email: email.value,
            //     password: password.value
            // }
            
            postData(url, JSON.stringify(data))
            .then(data => {
                localStorage.setItem("token", data.token)
                console.log(data);
                showModal(true);
            })
            .catch(() => {
                showModal(false);
                console.log('error')
            })
            .finally(() => {
                form.reset();
                statusMessage.remove()
            })
        } else {
            console.log('This is a required field.');
        };
    };

    formLogin.addEventListener('submit', formSend(formLogin, 'login'));
    formRegist.addEventListener('submit', formSend(formRegist, 'register'));
