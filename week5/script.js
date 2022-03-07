function registerEvents(){
    var button = document.getElementById('circle');
    document.addEventListener('keydown', myKeyDown);
    button.style.opacity = '1';
}

function myKeyDown(event){
    console.log(event.keyCode);
    if(event.keyCode === 37){
        moveButton();
    }
}

function moveButton(){
    var button = document.getElementById('circle');
    var buttonOffsetLeft = button.offsetLeft;
    button.style.left = buttonOffsetLeft - 10 + 'px';
}

function setTimer(){
    setInterval(changeButtonStyle, 10);
}

function changeButtonStyle(){
    var button = document.getElementById('circle');
    console.log(button.style.opacity);
    button.style.opacity = parseFloat(button.style.opacity) - 0.01;
}

document.addEventListener('DOMContentLoaded', registerEvents);
