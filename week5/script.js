function registerEvents(){
    var button = document.getElementById('circle');
    button.addEventListener('click', getTextAlert);
}

function getTextAlert(){
    var button = document.getElementById('circle');
    button.style.backgroundColor = 'blue';
}

document.addEventListener('DOMContentLoaded', registerEvents);
