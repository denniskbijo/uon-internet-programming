function registerEvents(){
    var button = document.getElementById('circle');
    button.addEventListener('click', getTextAlert);
}

function getTextAlert(){
    var button = document.getElementById('circle');
    button.style.backgroundColor = 'blue';
    button.style.opacity = '1';
}

document.addEventListener('DOMContentLoaded', registerEvents);
