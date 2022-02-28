function registerEvents(){
    var element = document.getElementById('pageHeading');
    element.addEventListener('click', changeHeadingValue);
    element = document.getElementById('paragraph');
    element.addEventListener('click', changeParagraphValue);

}

function changeHeadingValue(){
    var heading = document.getElementById('pageHeading');
    heading.firstChild.nodeValue = 'New Heading'; 
}

function changeParagraphValue(){
    var paragraph = document.getElementById('paragraph');
    paragraph.firstChild.nodeValue = 'New Paragraph. ';
}

document.addEventListener('DOMContentLoaded', registerEvents);
