function registerEvents(){
    var button = document.getElementById('circle');
    button.addEventListener('click', setTimer);
    button.style.opacity = '1';
}

function setTimer(){
    setInterval(changeButtonStyle, 1000);
}

function changeButtonStyle(){
    var button = document.getElementById('circle');
    console.log(button.style.opacity);
    button.style.opacity = parseFloat(button.style.opacity) - 0.1;
}

document.addEventListener('DOMContentLoaded', registerEvents);
