let todoList=[];

let storedList = localStorage.getItem('todoList');
if (storedList) {
    todoList = JSON.parse(storedList);
}

displayItems();

function addTodo() {
    let inputElement = document.querySelector('#todo-input');
    let dateElement = document.querySelector('#todo-date');
    let todoItem = inputElement.value;
    let todoDate = dateElement.value;

    if (todoItem === '' || todoDate === '') return;

    todoList.push({ item: todoItem, dueDate: todoDate });

    inputElement.value = '';
    dateElement.value = '';

     localStorage.setItem('todoList', JSON.stringify(todoList));
    displayItems();
}

function displayItems(){
    let containerElement = document.querySelector('.todo-container');

    let newHtml='';

    for(let i=0;i< todoList.length;i++)
    {
        let {item,dueDate}= todoList[i];
        newHtml+= `
            
                <span>${item}</span>
                <span>${dueDate}</span>
                <button class='btn-delete'
                onclick="todoList.splice(${i},1);
                displayItems();">Delete</button>
            
        `;
    }

    containerElement.innerHTML= newHtml;    
}