const addMessage = document.querySelector('.message');
const addBtn = document.querySelector('.add');
const todo = document.querySelector('.todo');

let todoList = [];
if (localStorage.getItem('todo')) {
    todoList = JSON.parse(localStorage.getItem('todo'));
    displayMessages(); 
}

addBtn.addEventListener('click', function() {

    const newTodo = {
        todo: addMessage.value,
        checked: false,
        important: false
    };

    todoList.push(newTodo);
    displayMessages();
    localStorage.setItem('todo', JSON.stringify(todoList));

})

function displayMessages() {
    let displayMessage = '';        
    todoList.forEach(function(item, i) {
        displayMessage += `
        <li>
            <input type="checkbox" id="item_${i}" ${item.checked ? 'checked' : ''}>
            <label for="item_${i}" class="${item.important ? 'important' : ''}">${item.todo}</label>
        </li>
        `;
        todo.innerHTML = displayMessage;
    });
}

todo.addEventListener('change', function(e) {
    const valueLabel = todo.querySelector('[for=' + e.target.getAttribute('id') + ']').innerHTML;
    todoList.forEach(function(item) {
        if (item.todo === valueLabel) {
            item.checked = !item.checked;
            localStorage.setItem('todo', JSON.stringify(todoList));
        }
    })
    console.log('valueLabel:', valueLabel)
})

todo.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    todoList.forEach(function(item) {
        if (item.todo === event.target.innerHTML) {
            item.important = !item.important;
            displayMessage();
            localStorage.setItem('todo', JSON.stringify(todoList));
        }
    })
})