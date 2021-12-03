const clock = document.querySelector("h2#clock");


function getClock(){
    const date = new Date();
    const hour = String(date.getHours()).padStart(2,"0");
    const min = String(date.getMinutes()).padStart(2,"0");
    const sec = String(date.getSeconds()).padStart(2,"0");
    clock.innerHTML= `${hour} : ${min} : ${sec}`;

}

//웹사이트 즉시 고침 
getClock()
//매초마다 clock을 부르기 
//setInterval(getClock, 1000);
