const boxes = document.querySelectorAll(' .box');
const button = document.getElementById('generator');

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';

    for ( let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

button.addEventListener('click' , function() {
    boxes.forEach(function(box) {
        box.style.backgroundColor = getRandomColor();
    });
});