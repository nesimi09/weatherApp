const counter = document.getElementById('cntr');
const button = document.getElementById('btn');

let count = 0;

button.addEventListener('click', function (){
    let randomNum = Math.floor(Math.random() * 10);
    count = randomNum;
    counter.textContent = count;
});