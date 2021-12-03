const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

// string을 반복해서 써야 하는 경우 
const HIDDEN = "hidden";
const USERNAME_KEY = "username";


function onLoginSubmit(name){
    //브라우저의 기본 동작을 막아줌 
    name.preventDefault();

    //클래스 하나 추가 
    loginForm.classList.add(HIDDEN);

    // 유저 이름 저장  
    const userName = loginInput.value;

    //local storage에 저장
    localStorage.setItem(USERNAME_KEY, userName);

    paintGreeting(userName);
}

function paintGreeting(name) {
    greeting.classList.remove(HIDDEN);
    greeting.innerHTML = `hello ${name} `;
}


const savedUsername = localStorage.getItem(USERNAME_KEY)

// localstorage에 이름이 없을 때 
 if (savedUsername === null){
    loginForm.classList.remove(HIDDEN);
    loginForm.addEventListener("submit", onLoginSubmit);
 }else{
    paintGreeting(savedUsername);
 }
