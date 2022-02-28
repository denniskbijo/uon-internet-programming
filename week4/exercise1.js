function registerEvents(){
    var button = document.getElementById('button');
    button.addEventListener('click', getTextAlert);
}

function getTextAlert(){
    var textBox = document.getElementById('textbox');
    var textContent = textBox.value;
    console.log('getTextAlert', textContent);
    alert(textContent);
}

document.addEventListener('DOMContentLoaded', registerEvents);
