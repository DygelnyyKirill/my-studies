const addMessage = document.querySelector('.message');
const addBtn = document.querySelector('.add');
const todo = document.querySelector('.todo');
const containerTodo = document.querySelector('.containerTodo');

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
    getAllClients();

})
// const tokenId = localStorage.getItem('token');

// function getAllClients() {
//     const myHeaders = new Headers();
//         myHeaders.append("Content-Type", "application/json");
//         myHeaders.append("Authorization", tokenId);

//     return fetch('http://localhost:3000/to-dos/604fb49e70d35c3d3c2ca0da', {
//         method: 'GET',
//         headers: myHeaders,
//     })
//     .then(response => {
//         if (response.status === 200) {
//             console.log(response)
//           return response.json();
//         } else {
//           throw new Error('Something went wrong on api server!');
//         }
//       })
//     .then(response => {
//         console.debug(response);
//     })
//     .catch(error => {
//         console.error(error);
//     });
// }

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
    todoList.forEach(function(item, i) {
        if (item.todo === event.target.innerHTML) {
            if (event.ctrlKey) {
                todoList.splice(i, 1);
            } else {
                item.important = !item.important;
            }
            displayMessages();
            localStorage.setItem('todo', JSON.stringify(todoList));
        }
    })
})