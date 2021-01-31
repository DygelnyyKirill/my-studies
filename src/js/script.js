// "use strict" 
// document.addEventListener('DOMContentLoaded', function(){
//     const authLogin = document.getElementById('auth__login');
//     const authRegist = document.getElementById('regist');
//     const formReg = document.querySelector('.form-registration');
//     const name = document.getElementById('login-name');
//     const login = document.getElementById('login-pass');
    
    
//     authLogin.addEventListener('click', sendDateUser);
//     authRegist.addEventListener('click', sendDateUser);


//     function sendDateUser () {
//         formReg.style.display = 'block'
//     }

//     const form = document.getElementById('myForm');
//     form.addEventListener('submit', formSend);

//     async function formSend(e) {
//         e.preventDefault();

//         const message = {
//             loading: 'Loading',
//             success: 'Everything went smoothly',
//             failure: 'Error'
//         };

//         let error = formValidate(form);
//         // let formData = new FormData(form);

//         if (error === 0) {
//             const statusMessage = document.createElement('div');
//             statusMessage.classList.add('status');
//             statusMessage.textContent = message.loading;
//             form.append(statusMessage);


//             let xhr = new XMLHttpRequest();
//             xhr.open("POST", 'http://localhost:3000/auth/login');
//             // setRequestHeader("Content-Type", "application/json");
//             xhr.onreadystatechange = function () { 
//                 if (xhr.readyState === 4 && xhr.status === 200) { 
//                     result.innerHTML = this.responseText; 
//                 } 
//             };
//             let data = JSON.stringify({ "name": name.value, 
//             "lastname": login.value }); 
//             xhr.send(data);


//         //     let response = await fetch('http://localhost:3000/auth/login', {
//         //         method: 'POST',
//         //         body: formData
//         //     });
//         //     if (response.ok) {
//         //         let result = await response.json();
//         //         alert(result);
//         //         statusMessage.textContent = message.success;
//         //         form.reset();
//         //     } else {
//         //         alert('An error has occurred.');
//         //         statusMessage.textContent = message.failure;
//         //         form.reset();
//         //     }
//         } else {
//             alert('This is a required field.')
//         }
//     }
//     function formValidate(form) {
//         let error = 0;
//         let formReq = document.querySelectorAll('._req');

//         for (let i = 0; i < formReq.length; i++) {
//             const input = formReq[i];
//             formRemoveError(input);

//             if (input.classList.contains('_email')) {
//                 if (emailTest(input)) {
//                     formAddError(input);
//                     error++;
//                 }
//             } else {
//                 if (input.value === '') {
//                     formAddError(input);
//                     error++;
//                 }
//             }
//         }
//         return error;
//     }
//     function formAddError(input) {
//         input.parentElement.classList.add('_error');
//         input.classList.add('_error');
//         console.log('This is a required field.')
//     }
//     function formRemoveError(input) {
//         input.parentElement.classList.remove('_error');
//         input.classList.remove('_error');
//     }
//     function emailTest(input) {
//         return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
//     }
// })