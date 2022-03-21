window.onload = makeAjaxRequest;

let xhr;
function makeAjaxRequest(){
    //Create XHR Object
    if(window.XMLHttpRequest){
        xhr = new XMLHttpRequest();   
    }else if(window.ActiveXObject){
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }

    if(xhr){
        //Send XHR Request
        xhr.open("GET", "counties.json", true);
        xhr.send();
        xhr.onreadystatechange = showContents;
    }else{
        //Handle error
        document.getElementById("updatemessage").innerHTML = "Couldn't perform the request";
    }
}

function showContents(){
 console.log("showContns");
 if(xhr.readyState===4){
    if(xhr.status === 200){
        let data = JSON.parse(xhr.responseText);
        const counties = data.counties;
        console.log(counties);
        let tableMarkup = "";
        counties.forEach(element => {
            tableMarkup+= `<tr><td>${element.name}</td></tr>`;
        });
        document.getElementById("countylist").innerHTML = tableMarkup;
    }else{
        //Handle error
    }
}
}
