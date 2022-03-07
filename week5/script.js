function registerEvents(){
    var button = document.getElementById('circle');
    button.addEventListener('click', getTextAlert);
}

function getTextAlert(){
    alert('The button was pressed!');
}

document.addEventListener('DOMContentLoaded', registerEvents);
