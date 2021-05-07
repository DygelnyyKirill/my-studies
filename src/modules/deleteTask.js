// function deliteTask(e) {
//     const item = e.target;
//     if (item.classList[0] === "trash-btn") {
//         const todo = item.parentElement;
//         todo.remove();
//     }
// };

// export default deliteTask;



// function deleteTask(e) {
//     const item = e.target;
//     console.log(item)
//     if (item.classList[0] === "trash-btn") {

//         // todo.remove();
//         // displayMessages();
//         serverList.todo[0].listItems = todoList

//         fetch(`http://localhost:3000/to-dos/${serverList.todo[0]._id}`, {
//             method: "PUT",
//             body: JSON.stringify(serverList.todo[0]),
//             headers: {
//                 "Content-Type": "application/json"
//             }
//         })
//         .then(res => res.json())
//         .then(response => {
//             console.log(response);
//             serverList.todo[0].listItems.forEach(function(i) {
//                 if (i > -1) {
//                     array.splice(i, 1);
//                   }
//             })

//             console.log('res', serverList.todo[0].listItems)
//             const todo = item.parentElement.remove(); 
//             localStorage.setItem('todo', JSON.stringify(todoList));

//         })
//         .catch((e) => {
//             console.log('error', e)
//         })
//         .finally(() => {
//             statusMessage.remove()
//         })
    
//     }
// };
