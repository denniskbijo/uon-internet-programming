function print5(){
    for(var i=1;i<=5;i++){
        console.log(i);
    }
}

function changeHeadingValue(){
    var heading = document.getElementById('pageHeading');
    heading.firstChild.nodeValue = 'New Heading'; 
    var paragraph = document.getElementById('paragraph');
    paragraph.firstChild.nodeValue = 'New Paragraph. ';
}

document.addEventListener('click', changeHeadingValue);
