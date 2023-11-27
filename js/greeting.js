/*
당신의 이름을 적어주세요.
라고 사용자에게 물어 답변을 화면에 표시한다.
*/
// document 의 id 가 formLogin 인 form
// const formLogin = document.getElementById("formLogin");

// inputbox
// const inputLogin = document.querySelector("#name");

// btn
// const btnLogin = document.getElementById("btnLogin")

// h1
const h1 = document.getElementById("h1");

//div
const formLogin = document.getElementById("Login");
const inputLogin = formLogin.querySelector("input");

//className 상수화
const HIDDEN_CLASSNAME = "hidden";

// username 상수화
const KEY_USERNAME = "userName"

// btnlogin.innerHTML = "클릭";
// console.log();


function clickLogin(event){
    event.preventDefault();
    // form은 숨긴다
    formLogin.classList.add(HIDDEN_CLASSNAME);

    const userName = inputLogin.value;
    localStorage.setItem(KEY_USERNAME, userName);
    // h1은 보여주고
    displayGreeting(userName)
}

/**
 * 인사를 출력하는 함수
 */

function displayGreeting(argName) {
    h1.classList.remove(HIDDEN_CLASSNAME);
    h1.innerText =`${argName}님, 반가워요.`;
}

/* 
로컬 스토리지에서 가져온 사용자 이름
*/
const lsUserName = localStorage.getItem(KEY_USERNAME);

if (lsUserName === null ) {
    formLogin.classList.remove(HIDDEN_CLASSNAME);
    formLogin.addEventListener("submit", clickLogin);
}else {
    // formLogin.classList.add(HIDDEN_CLASSNAME);
    displayGreeting(lsUserName)
}

//login 버튼으로 구성

