const button = document.getElementById("button");
const body = document.body;


const white = "#fff";
const black = "#000";

let isDark = Math.random() < 0.5;

function start(){
    if (isDark){
        body.style.backgroundColor = black;
        body.style.color = white;
        button.style.color = white;
        button.style.backgroundColor = black;
        button.style.borderColor = "white";
        
    }   else{
        body.style.backgroundColor = white;
        body.style.color = black;
        button.style.color = black;
        button.style.backgroundColor = white;
        button.style.borderColor = "black";
    }
}
start();

button.addEventListener("click" , function(){
    if (isDark){
        body.style.backgroundColor = white;
        body.style.color = black;
        button.style.color = black;
        button.style.backgroundColor = white;
        button.style.borderColor = "black";
        
        isDark = false;
    }   else{
        body.style.backgroundColor = black;
        body.style.color = white;
        button.style.color = white;
        button.style.backgroundColor = black;
        button.style.borderColor = "white";
        isDark = true;

    }
})


