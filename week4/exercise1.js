function print5(){
    for(var i=1;i<=5;i++){
        console.log(i);
    }
}

function changeHeadingValue(){
    var heading = document.getElementById('pageHeading');
    heading.firstChild.nodeValue = 'New Heading'; 
}

document.addEventListener('DOMContentLoaded', changeHeadingValue);
