var lose = false;
  window.onload = function() {
   document.getElementById("start").onclick = begin;
  document.getElementById("end").onmouseover = end;
  var b = document.getElementsByClassName("boundary");
   for (var i = 0; i < b.length; i++) {
      b[i].onmouseover = mistake;
      
   }
   };
function mistake(){
  lose = true;
  var b = document.getElementsByClassName("boundary");
}
function begin(){
  lose = false;
  var b = document.getElementsByClassName("boundary");
}
function end(){
  if(lose){
   var status = document.getElementById("status").innerHTML="Sorry :( you lost";
  document.getElementById("status").style.color="red";

  }
  else{
  var status = document.getElementById("status").innerHTML="Congratulations :) you won !";
  document.getElementById("status").style.color="#33cc33";
  }
   
}