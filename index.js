let myInp = document.getElementById("num");
const guess = document.getElementById("guess");
var numDisp = document.getElementById("numDisplay");

var answer = Math.round(Math.random()*100);
let score = 100;

guess.addEventListener("click",function(){
  // console.log("45", parseInt("45"));
  // numDisp.innerText = "hi";

  var myNum = parseInt(myInp.value);

  if(myNum == answer){
    numDisp.innerText = "You win! Score: "+score;
  } else {
    if(myNum < answer) {
      numDisp.innerText = "Too small";  
    } else if (myNum > answer) {
      numDisp.innerText = "Too big";
    }
    score = score - 1;
    score--;
  }
});