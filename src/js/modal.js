const authBth = document.getElementById('form-modal');
const modal = document.querySelector('.modal');
const formBox = document.querySelector('.form-box');
const contentModal = document.querySelector('.text-content');

authBth.addEventListener('click', openFormBox);

function openFormBox() {
    formBox.style.display = "block";
}

function showModal(data) {
    formBox.style.display = "none";
    modal.style.display = "flex";
    const div = document.createElement('div');
    div.className = 'text-content';
    div.textContent = `${data}`
    contentModal.appendChild(div);
    setTimeout(() => {
        modal.style.display = "none";
    }, 1500);
}
