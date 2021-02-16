"use strict"

document.addEventListener('DOMContentLoaded', function() {
 
    const formLog = document.getElementById('login');
    const formReg = document.getElementById('register');
    const logBtn = document.getElementById('log-btn');
    const regBtn = document.getElementById('reg-btn');
    const logReg = document.getElementById('btn');
    regBtn.addEventListener('click', function() {
        formLog.style.left = "-400px";
        formReg.style.left = "50px";
        logReg.style.left = "110px";
    });
    logBtn.addEventListener('click', function() {
        formLog.style.left = "50px";
        formReg.style.left = "450px";
        logReg.style.left = "0px";
    });
    
});