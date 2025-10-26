

document.querySelector(".js-add-button").addEventListener("click",()=>{
    const task = document.querySelector('.task');
    const dueDate = document.querySelector('.dueDate') ;

    const taskValue = task.value.trim();
    const dueDateValue = dueDate.value;

    if (!taskValue) return;

    const id = `task-${Date.now()}`;

    const todoDiv = document.createElement('div');
    todoDiv.id = id;
    todoDiv.innerHTML = `
      <div>${taskValue}</div>
      <div>${dueDateValue}</div>
      <button class="js-delete-button delete-todo-button" onclick="Delete('${id}')">Delete</button>
    `;

    document.querySelector('.to-do-list').appendChild(todoDiv); 

    task.value = '';
    dueDate.value = '';
    let div = document.getElementById(task.value);
    console.log(div);
});

function Delete(param){
    let div = document.getElementById(param);
    div.parentNode.removeChild(div);
}
