const addMessage = document.querySelector('.message');
const addBtn = document.querySelector('.add');
const todo = document.querySelector('.todo');
const containerTodo = document.querySelector('.containerTodo');
const url = "http://localhost:3000/to-dos/604fb49e70d35c3d3c2ca0da"
const jwt = localStorage.getItem('token')
console.log(jwt)


// const postTodo = async (url, data) => {
//     let token = localStorage.getItem('token')
//     console.log(token)
       

//     const res = await fetch(url, {
//         method: "GET",
//         body: data,
//         headers: {
//             "Content-Type": "application/json",
//             "Authorization": "Bearer " + token
//         }
//     })
//     if (!res.ok) {
//         throw new Error();
//     }
//     return await res.json();
// }
  // postTodo(url, JSON.stringify()
    // .then(todo => {
    //     console.log(todo);
    // })
    // .catch(() => {
    //     console.log('error')
    // })
    // .finally(() => {
    //     addMessage.value = ''
    // })


let todoList = [];

function getResource() {
    fetch('http://localhost:3000/to-dos/604fb49e70d35c3d3c2ca0da', {
        headers: {
            "Authorization": `Bearer ${jwt}`
        }
    })
    .then(data => data.text)
    .then(res => {
        console.log(res)
    })
    .catch(() => {
        console.log('error')
    })
    .finally(() => {
        addMessage.value = ''
    })
}    

addBtn.addEventListener('click', function() {
    
    const newTodo = {
        todo: addMessage.value,
        checked: false,
        important: false
    };

    // console.log('todo', newTodo)

    todoList.push(newTodo);
    displayMessages();
    getResource()
  

    localStorage.setItem('todo', JSON.stringify(todoList));

})

if (localStorage.getItem('todo')) {
    todoList = JSON.parse(localStorage.getItem('todo'));
    displayMessages(); 
}

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
