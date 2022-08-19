import { myFunction1 } from './module.js';

let val = myFunction1(); 
alert(val);

// console.log('Client-side code running');
var i = 0;

const button = document.getElementById('EchoBtn');

button.addEventListener('click', function(e) {
  console.log('button was clicked', i++);
  myFunction1(i);
  //testReq();
});




// function myFunction() {
//     console.log('button was clicked');
//     // document.getElementById("demo").innerHTML = "Paragraph changed.";
// }

// function testReq(){
//   var initialArray;
//   ItemJSON = '[{"id": 1,"num": "1","status": 1,  }]';
//   URL = "http://localhost:8080/v1/example/echo/quang/10"
  
//   xhttp.open('GET',URL);
//   xhttp.send();
// }
