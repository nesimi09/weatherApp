const numberInput = document.getElementById('number');
const submit = document.getElementById('submit');
const answer = document.getElementById('answer');
const truth = document.getElementById('ar');


 
const secretNumber = Math.floor(Math.random() * 10) + 1;

submit.addEventListener('click', function(){

    const userGuess = numberInput.value;

    if (userGuess == secretNumber){
        answer.textContent = 'Correct';
    }
    else if (userGuess > 10){
        answer.textContent = "Please enter a number 1-10"
    }
    else {
        answer.textContent = `Wrong the number was ${secretNumber}`;
    }
});

