const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.getElementById("todo-list");

//local storage의 key name
const TODOS_KEY = "todo-list";

let todos = [];

//local storage는 text만 저장 -> 단순히 string으로 바꿀때 stringify를 사용 
function saveTodos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

function delTodo(event){
    const li = event.target.parentElement;
    li.remove();

    //filter는 기존의 array를 업데이트하지 않고 새 array를 준다 
    todos = todos.filter((item) => item.id !== parseInt(li.id));
    saveTodos();
}

function paintTodo(newTodo){
    const todoLi = document.createElement("li");
    const todoSpan = document.createElement("span");
    const todoBtn = document.createElement("button");
    
    todoLi.id = newTodo.id;

    todoBtn.innerText ="X";
    todoSpan.innerText = newTodo.text;
    
    todoBtn.addEventListener("click", delTodo);

    //btn과 span을 li안에 넣기 (append는 맨 마지막에 놓기)
    todoLi.appendChild(todoSpan);
    todoLi.appendChild(todoBtn);
    todoList.appendChild(todoLi);
}

function submitTodo(event) {
    //submit의 새로고침 방지 
    event.preventDefault();

    //작성한 todo 변수에 저장 
    const newTodo = todoInput.value;
    todoInput.value = "";

    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    };


    todos.push(newTodoObj);
    paintTodo(newTodoObj);
    saveTodos();
}

todoForm.addEventListener("submit", submitTodo);


const savedTodos = localStorage.getItem(TODOS_KEY);


//localstorage에 있으면 
if (savedTodos !== null){
    //string을 js가 이해할 수 있는 array로 바꿔줌 
    const parsedTodos = JSON.parse(savedTodos);

    //array에 넣기 (새로고침을 해도 저장이 되게)
    todos = parsedTodos;

    //array에 있는 각각의 item에 대해 적용 
    parsedTodos.forEach(paintTodo);
}
