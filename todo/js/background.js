const img = ["01.jpeg", "02.jpeg", "03.jpeg"];

const rand = img[Math.floor(Math.random()*img.length)];

//js에서 html요소 만들기 
const bg = document.createElement("img");
bg.src= `img/${rand}`;

//html body 맨뒤에 저장하기 
document.body.appendChild(bg);