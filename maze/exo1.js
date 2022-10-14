window.onload = function(){
    var b = document.getElementsByClassName("boundary");
    b[0].onmouseover = mistake;
    b[1].onmouseover = mistake1;
    b[2].onmouseover = mistake2;
    b[3].onmouseover = mistake3;
    b[4].onmouseover = mistake4;
  };
  
  function mistake() {
    var b = document.getElementsByClassName("boundary");
    b[0].style.backgroundColor = "red";
  }
  function mistake1() {
    var b = document.getElementsByClassName("boundary");
    b[1].style.backgroundColor = "red";
  }
  function mistake2() {
    var b = document.getElementsByClassName("boundary");
    b[2].style.backgroundColor = "red";
  }
  function mistake3() {
    var b = document.getElementsByClassName("boundary");
    b[3].style.backgroundColor = "red";
  }
  function mistake4() {
    var b = document.getElementsByClassName("boundary");
    b[4].style.backgroundColor = "red";
  }
  