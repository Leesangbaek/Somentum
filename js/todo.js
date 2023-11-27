/*
2023.11.24
최초작성자 : 
수정자 :
이력 : 2023.11.24 최초 작성
기능 : todo리스트를 제어한다.
       todo리스트를 추가한다.
       todo리스트 로컬스토리지에 저장 

*/

const formTodo = document.getElementById("formTodo");
const listTodo = document.getElementById("listTodo");
const inputTodo = document.querySelector('#formTodo input');

// todo 리스트 로컬스토리지 저장
let todos = [];
const KEY_TODOS = "todos";

/*
로컬스토리지 저장
*/
function saveTodos() {
    localStorage.setItem(KEY_TODOS, JSON.stringify(todos));
}


/* 
todo 리스트에서 항목을 삭제한다.
*/

function deleteTodo(event) {
    // console.log("deleteTodo 함수 시작");
    // console.log(event);
    // console.dir(event);
    // console.log(event.target.parentElement);
    const li = event.target.parentElement;
    li.remove();
}

function displayTodo(arg) {
    
    // 리스트(ul)에 추가하기
    // ul>li>span
    // li추가
    const li = document.createElement("li");
    li.id = arg.id;
    // span추가
    const span = document.createElement("span");
    // span에 할일(arg) 추가
    span.innerText = arg.text;
    const button = document.createElement("button");
    button.innerText = "X";
    button.addEventListener("click", deleteTodo);
    // 문서에 붙이라면 appendChild를 해준다
    li.appendChild(span);
    li.appendChild(button);
    listTodo.appendChild(li);

}

function handleSubmitTodo(event) {
    event.preventDefault();
    const valueTodo = inputTodo.value;
    // console.log(valueTodo);
    inputTodo.value="";

    const newTodoObj = {
        text : valueTodo,
        id : Date.now(),
    };

    todos.push(newTodoObj);
    //todos.push(valueTodo);
    console.log(todos);
    displayTodo(newTodoObj);
    saveTodos();
}

formTodo.addEventListener("submit", handleSubmitTodo);

const lsSaveTodos = localStorage.getItem(KEY_TODOS);
if (lsSaveTodos !== null) {
    // console.log("lsSaveTodos", lsSaveTodos);
    // console.log(JSON.parse(lsSaveTodos));
    const parseLsSaveTodos = JSON.parse(lsSaveTodos);
    todos = parseLsSaveTodos;
    parseLsSaveTodos.forEach(displayTodo);
    //parseLsSaveTodos.forEach(item => {   
    //    
    //});
}