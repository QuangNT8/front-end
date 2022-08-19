var express = require('express');
var app = express();
var XMLHttpRequest = require('xhr2');
const xhttp = new XMLHttpRequest();

var tmpresponse;

function UserAction() {
    //var val = 'Hello World!';
    return 'Hello World!';
}

function testReq(){
    var initialArray;
    ItemJSON = '[{"id": 1,"num": "1","status": 1,  }]';
    URL = "http://localhost:8080/v1/example/echo/quang/10"
    
    xhttp.open('GET',URL);
    xhttp.send();
}

let btn = document.createElement("button")

btn.innerHTML = "Submit";
btn.type = "submit";
btn.name = "formBtn";
document.body.appendChild(btn);

xhttp.onload = function() {
    console.log("xhttp.onload");
    console.log(this.responseText);
    tmpresponse = this.responseText;
}

app.get('/', function(req,res){
    var reqresult;
    console.log('has request');
    reqresult = testReq();

    console.log(reqresult);
    //res.send(UserAction());
    res.send(tmpresponse);
});

app.listen(3000, function()
{
    console.log('hello all is listening on port 3000');
})