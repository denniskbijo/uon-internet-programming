window.onload = makeAjaxRequest;

function makeAjaxRequest(){
    if(window.XMLHttpRequest){
        xhr = new XMLHttpRequest();   
    }else if(window.ActiveXObject){
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }
}