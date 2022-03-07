function registerEvents(){
    var button = document.getElementById('circle');
    button.addEventListener('click', changeButtonStyle);
    button.style.opacity = '1';
}

function changeButtonStyle(){
    var button = document.getElementById('circle');
    button.style.backgroundColor = 'blue';
    button.style.opacity = '0.5';
}

document.addEventListener('DOMContentLoaded', registerEvents);
