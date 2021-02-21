const modal = document.getElementById('form-modal');
const formBoxMod = document.querySelector('.form-box');
const formClose = document.querySelector('.hero');

modal.addEventListener('click', () => {
    formBoxMod.style.display="block";
})

// formClose.addEventListener('click', () => {
//     formBoxMod.style.display="none";
// })