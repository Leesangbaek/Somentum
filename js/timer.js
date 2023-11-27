/**
 * 2023.11.22
 * 소멘텀 메인에 뜨는 시계
 */
// 시간
const clock = document.getElementById("clock");

function getClock() {
    const date = new Date();
    // padStart => 숫자 앞에 0 붙이기 padStart(size(자릿수), 추가해줄 값)
    const hour = String(date.getHours()).padStart(2, "0");
    const minute = date.getMinutes();
    const second = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hour} : ${minute} : ${second}`;
}

clock.classList.add("weather");

getClock;

setInterval(getClock, 0);

