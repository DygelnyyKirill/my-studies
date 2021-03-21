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
           
            const data = {
                email: form.querySelector('input[name="email"]').value,
                password: form.querySelector('input[name="password"]').value,
            }

            console.log(data)
            
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

    function makeRequest() {
        let token = JSON.parse(localStorage.getItem('token'));
    console.log(`Authorization=Bearer ${token}`)
    fetch('http://localhost:3000/to-dos', {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + token
        }
    })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
        .catch(err => { console.log(err) })
        // let headers = {}
        // if (localStorage.token) {
        //     headers = {'Authorization': localStorage.token}
        // }
        // console.log(headers)
        // fetch("http://localhost:3000/to-dos", { headers: headers })
        // .then((res) => {
        //     if (res.status == 200) {
        //         return res.text()
        //     } else {
        //         throw Error(res.statusText)
        //     }
        // })
        // .then(responseText => console.log(responseText))
        // .catch(console.error)
    }

    makeRequest()

    formLogin.addEventListener('submit', formSend(formLogin, 'login'));
    formRegist.addEventListener('submit', formSend(formRegist, 'register'));
