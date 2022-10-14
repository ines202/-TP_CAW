window.onload = function() {
    var b = document.getElementsByClassName("boundary");
      for (var i = 0; i < b.length; i++) {
        b[i].onmouseover=mistake;
      }
     
   };
   function mistake(){
      var b =document.getElementsByClassName("boundary");
      for (var i = 0; i < b.length; i++) {
        b[i].style.backgroundColor="#ff3333";
      }
   
    }