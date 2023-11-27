/**
 2023.11.23
 소멘텀 메인에 뜨는 날씨
 위치 기반으로 날씨를 알려 준다.
 날씨 API를 사용한다.
 */
 
 function onSucces(position) {
    // console.log(position.coords.latitude);
    // console.log(position.coords.longitude);
    const API_KEY = 'c202357ea78fac116f10211922c3e0d1';
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    console.log(`나의 위치는 위도 ${latitude}, 경도 ${longitude} 입니다.`);
    
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`

    fetch(url).then(response => response.json()).then(data => {
        console.log(data.name, data.weather[0].description, data.main.temp);
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        weather.innerHTML = data.weather[0].description;
        city.innerHTML = data.name;
    })
 }


 function onFail() {
    console.log("위치를 찾을 수 없습니다.");
 }

 // 현재 위치
navigator.geolocation.getCurrentPosition(onSucces, onFail);
