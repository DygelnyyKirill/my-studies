const addMessage = document.querySelector('.message');
const addBtnTodo = document.querySelector('.add-Todo');
const addBtnServer = document.querySelector('.add-Server');
const todo = document.querySelector('.todo');
const containerTodo = document.querySelector('.containerTodo');
const jwt = localStorage.getItem('token')
console.log('jwt', jwt)


let todoList = [];
let serverList = [];

function getResource(token) {
    fetch('http://localhost:3000/to-dos/605110eae5e3d06785c076ac', {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    })
    .then(data => data.json())
    .then(res => {
        serverList = res
        todoList = res.todo[0].listItems
        console.log('res', serverList)
        displayMessages();
    })
    .catch((e) => {
        console.log('error', e)
    })
    .finally(() => {
        addMessage.value = ''
    })
}    

getResource(jwt)

addBtnTodo.addEventListener('click', function() {
    
    const newTodo = {
        title: addMessage.value,
        isCompleted: false,
        important: false
    };

    todoList.push(newTodo);
    localStorage.setItem('todo', JSON.stringify(todoList));
    displayMessages();
    addMessage.value = ''
})

addBtnServer.addEventListener('click', function() {
    
    const newTodo = {
        title: addMessage.value,
        isCompleted: false,
        important: false
    };

    todoList.push(newTodo);
    localStorage.setItem('todo', JSON.stringify(todoList));
    updateDataTodo(newTodo)
})

function updateDataTodo(todo) {

    serverList.todo[0].listItems = todoList

    fetch(`http://localhost:3000/to-dos/${serverList.todo[0]._id}`, {
        method: "PUT",
        body: JSON.stringify(serverList.todo[0]),
        headers: {
            "Content-Type": "application/json"
        }
    })

    .then(res => res.json())
    .then(response => {
        console.log(response);
        displayMessages();
    })
    .catch((e) => {
        console.log('error', e)
    })
    .finally(() => {
        statusMessage.remove()
    })

}

if (localStorage.getItem('todo')) {
    todoList = JSON.parse(localStorage.getItem('todo'));
    displayMessages(); 
}

function displayMessages() {
    let displayMessage = '';        
    todoList.forEach(function(item, i) {
        // console.log('item', item)
        displayMessage += `
        <li>
            <input type="checkbox" id="item_${i}" ${item.isCompleted ? 'isCompleted' : ''}>
            <label for="item_${i}" class="${item.important ? 'important' : ''}">${item.title}</label>
            <button class="trash-btn">X</button>
        </li>
        `;
        todo.innerHTML = displayMessage;
    });
}

todo.addEventListener('change', function(e) {
    const valueLabel = todo.querySelector('[for=' + e.target.getAttribute('id') + ']').innerHTML;
    todoList.forEach(function(item) {
        if (item.title === valueLabel) {
            item.isCompleted = !item.isCompleted;
            localStorage.setItem('todo', JSON.stringify(todoList));
        }
    })
    console.log('valueLabel:', valueLabel)
})

todo.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    todoList.forEach(function(item, i) {
        if (item.title === event.target.innerHTML) {
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
const toList = document.querySelector('.todo');

toList.addEventListener('click', deleteCheck);

console.log(toList)

function deleteCheck(e) {
    const item = e.target;
    if (item.classList[0] === "trash-btn") {
        const todo = item.parentElement;
        todo.remove();
        console.log(todo)
    }
}