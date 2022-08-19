
const xhttp = new XMLHttpRequest();



export function myFunction1(i) {
    console.log('button was clicked',i);
    document.getElementById("demo").innerHTML = "Paragraph changed."+i;
    testReq(i);
    // document.getElementById("demo").innerHTML = "Paragraph changed.";
}

function testReq(i){
    //var initialArray;
    //ItemJSON = '[{"id": 1,"num": "1","status": 1,  }]';
    URL = "http://192.168.31.187:8080/v1/example/echo/quang/"+i
    
    xhttp.onreadystatechange = callbackFunction(xhttp);
    xhttp.open('GET',URL);
    xhttp.send();
}

function callbackFunction(xmlhttp) 
{
    console.log('callbackFunction',xmlhttp.responseText);
    console.log('callbackFunction',xmlhttp.statusText);
    if (xmlhttp.statusText == "OK")
    {
        document.getElementById("demo").innerHTML = xmlhttp.responseText;
    }
}