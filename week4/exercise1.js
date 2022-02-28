function registerEvents(){
    var element = document.getElementById('pageHeading');
    element.addEventListener('mouseenter', changeHeadingValue('Old Heading'));
    element.addEventListener('mouseleave', changeHeadingValue('New One!'));
    element = document.getElementById('paragraph');
    element.addEventListener('mouseenter', changeParagraphValue('Old Paragraph'));
    element.addEventListener('mouseleave', changeParagraphValue('Latest Paragraph!'));
}

function changeHeadingValue(value){
    var heading = document.getElementById('pageHeading');
    heading.firstChild.nodeValue = value; 
}

function changeParagraphValue(value){
    var paragraph = document.getElementById('paragraph');
    paragraph.firstChild.nodeValue = value;
}

document.addEventListener('DOMContentLoaded', registerEvents);
