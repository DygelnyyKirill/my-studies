const modal = document.querySelector('.modal');
const contentModal = document.querySelector('.text-content');
// передать параметр статуса ответа от сервера
function showModal(status) {
    modal.style.display = "flex";
    const modalDiv = `
        <div class="text-content"> 
            Login was ${status ? 'successful' : 'unsuccessful'}
        </div>
    `;
    contentModal.innerHTML = modalDiv;
    setTimeout(() => {
        modal.style.display = "none";
    }, 1500);
}
