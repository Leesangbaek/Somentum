/*
2023.11.23
소멘텀 메인에 뜨는 배경화면
랜덤으로 나오게 한다.
*/

const images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", 
                "6.jpg", "7.jpg", "8.jpg", "9.jpg", "10.jpg",];

const selectedImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
// console.log(bgImage);
bgImage.src = `img/${selectedImage}`;
// console.log(bgImage);

document.body.appendChild(bgImage);

bgImage.classList.add("Image");
