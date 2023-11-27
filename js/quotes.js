/*
2023.11.23
소멘텀 메인에 뜨는 명언
랜덤으로 나오게 한다.
*/

const quotes = [
    {
        quote:"허물이 있다면, 버리기를 두려워 말라",
        author:"공자",
    },
    {
        quote:"나이가 성숙을 보장하지는 않는다",
        author:"라와나 블랙웰",
    },
    {
        quote:" 인생에서 많은 패배에 직면하겠지만 결코 패배하지 말라",
        author:"마야 안젤루",
    },
    {
        quote:"두려움 때문에 갖는 존경심만큼 비열한 것은 없다",
        author:"카뮈",
    },
    {
        quote:"힘 있을 때 친구는 친구가 아니다",
        author:"헨리 애덤스",
    },
    {
        quote:"이또한 지나가리라",
        author:"에트 혹 트란시비트",
    },
    {
        quote:"내 인생을 바꾸는 사람은 자신입니다",
        author:"캐롤 버넷",
    },
    {
        quote:"인생은 불공평 합니다.익숙해지세요",
        author:"빌 게이츠",
    },
    {
        quote:"즐거움은 영원히 유행에 뒤떨어지지 않는다",
        author:"릴리 퓰리처",
    },
    {
        quote:"예의는 남과 화목함을 으뜸으로 삼는다",
        author:"논어",
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

console.log(quotes[Math.floor(Math.random() * quotes.length)]);
const todatQuote = quotes[Math.floor(Math.random() * quotes.length)];

// quote.innerText = quotes[Math.floor(Math.random() * quotes.length)].quote;
// author.innerText = quotes[Math.floor(Math.random() * quotes.length)].author;

quote.innerText = todatQuote.quote;
author.innerText = todatQuote.author;
