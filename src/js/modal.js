const authBth = document.getElementById('form-modal');
const modal = document.querySelector('.modal');
const formBox = document.querySelector('.form-box');
const contentModal = document.querySelector('.text-content');

function showModal() {
    modal.style.display = "flex";
    const div = document.createElement('div');
    div.className = 'text-content';
    div.textContent = 'Login was successful'
    contentModal.appendChild(div);
    setTimeout(() => {
        modal.style.display = "none";
    }, 1500);
}
